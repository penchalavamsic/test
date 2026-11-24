import { recordEvidence } from '../helpers/step-evidence';
import { test, expect } from '../fixtures/base';
import { SystemUserDashboardPage } from '../pages/system-user-dashboard.page';

test.describe('System User Dashboard — Expiring Floating Configurations EFC-D', () => {
  test('LIMAS-SUD-800: expires until input has no separate calendar icon', async ({ page }) => {
    const dashboard = new SystemUserDashboardPage(page);
    await dashboard.waitForFullRender();

    await recordEvidence('action-click-LIMAS-SUD-800-efc-d-no-separate-icon.spec-9', async () => dashboard.floatingConfigsCard.click());

    const expiresUntilInput = page.getByRole('textbox', { name: 'Expires until' });
    const siblings = await expiresUntilInput.locator('..').evaluate(el => el.children.length);
    await recordEvidence('assert-toBe-LIMAS-SUD-800-efc-d-no-separate-icon.spec-13', async () => expect(siblings).toBe(1));
  });
});