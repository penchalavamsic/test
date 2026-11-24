import { recordEvidence } from '../helpers/step-evidence';
import { test, expect } from '../fixtures/base';
import { SystemUserDashboardPage } from '../pages/system-user-dashboard.page';

test.describe('System User Dashboard — Processed License Record Fields', () => {
  test('LIMAS-SUD-218: should display a non-empty hardware ID paragraph under "Hardware / Created" section', async ({ page }) => {
    const dashboard = new SystemUserDashboardPage(page);
    await dashboard.waitForFullRender();
    await dashboard.enableHistory();
    await dashboard.waitForInitialHistoryLoad();

    const firstHwLabel = page.getByText('Hardware / Created').first();
    await recordEvidence('assert-toBeVisible-LIMAS-SUD-218-processed-record-hardware-id-visible.spec-12', async () => expect(firstHwLabel).toBeVisible());

    const parentContainer = firstHwLabel.locator('..');
    const hwIdParagraph = parentContainer.locator('p').first();
    await recordEvidence('assert-toBeVisible-LIMAS-SUD-218-processed-record-hardware-id-visible.spec-16', async () => expect(hwIdParagraph).toBeVisible());
    await recordEvidence('assert-toBeEmpty-LIMAS-SUD-218-processed-record-hardware-id-visible.spec-17', async () => expect(hwIdParagraph).not.toBeEmpty());
  });
});