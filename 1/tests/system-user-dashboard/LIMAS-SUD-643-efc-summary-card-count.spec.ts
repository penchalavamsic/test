import { recordEvidence } from '../helpers/step-evidence';
import { test, expect } from '../fixtures/base';
import { SystemUserDashboardPage } from '../pages/system-user-dashboard.page';

test.describe('System User Dashboard — Expiring Floating Configurations Section Shell', () => {
  test('LIMAS-SUD-643: efc count badge shows 0', async ({ page }) => {
    const dashboard = new SystemUserDashboardPage(page);
    await dashboard.waitForFullRender();

    const text = await dashboard.floatingConfigsCard.textContent();
    await recordEvidence('assert-toMatch-LIMAS-SUD-643-efc-summary-card-count.spec-10', async () => expect(text).toMatch(/\b0\b/));
  });
});
