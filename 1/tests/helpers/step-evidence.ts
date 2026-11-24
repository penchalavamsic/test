import { test, type Page, type TestInfo } from '@playwright/test';
import { envNumber } from './settings';

type EvidenceState = { page: Page; sequence: number; capturing: boolean };
const states = new WeakMap<TestInfo, EvidenceState>();
export function registerEvidence(page: Page, info: TestInfo): void {
  states.set(info, { page, sequence: 0, capturing: false });
}
export function unregisterEvidence(info: TestInfo): void { states.delete(info); }

export async function captureEvidence(label: string, info = test.info(), page?: Page): Promise<void> {
  if (process.env.PLAYWRIGHT_EVIDENCE_MODE === 'off') return;
  const state = states.get(info);
  const target = page ?? state?.page;
  if (!target || state?.capturing) return;
  if (state) state.capturing = true;
  const sequence = state ? ++state.sequence : info.attachments.length + 1;
  const name = `${String(sequence).padStart(4, '0')}-${label.replace(/[^a-zA-Z0-9-]+/g, '-').slice(0, 100)}`;
  try {
    if (target.isClosed()) throw new Error('Page closed');
    const selectors = ['input[type="password"]', 'input[name="username"]', 'input[autocomplete="username"]', ...JSON.parse(process.env.PLAYWRIGHT_EVIDENCE_MASK_SELECTORS || '[]')];
    const body = await target.screenshot({
      timeout: envNumber('PLAYWRIGHT_SCREENSHOT_TIMEOUT_MS', 3000, 1),
      fullPage: false, type: 'png', mask: selectors.map((s: string) => target.locator(s)),
    });
    await info.attach(`${name}.png`, { body, contentType: 'image/png' });
  } catch {
    try {
      await info.attach(`${name}-unavailable`, {
        body: 'Screenshot unavailable: page closed, capture timed out, or mask configuration invalid. See the trace and test result.',
        contentType: 'text/plain',
      });
    } catch { info.annotations.push({ type: 'evidence-unavailable', description: name }); }
  } finally {
    if (state) state.capturing = false;
  }
}

/** Preserve the original return value/error; evidence must never turn failure into success. */
export async function recordEvidence<T>(label: string, operation: () => T | Promise<T>): Promise<T> {
  try { return await operation(); }
  finally { await captureEvidence(label); }
}
