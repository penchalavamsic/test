import { recordEvidence } from '../helpers/step-evidence';
import { test, expect } from '../fixtures/base';
import { SystemUserDashboardPage } from '../pages/system-user-dashboard.page';

test.describe('System User Dashboard — Processed License Request Incremental Loading', () => {
  test('LIMAS-SUD-253: should have no duplicate processed records after incremental load', async ({ page }) => {
    const dashboard = new SystemUserDashboardPage(page);
    await dashboard.waitForFullRender();
    await dashboard.enableHistory();
    await dashboard.waitForInitialHistoryLoad();

    await dashboard.triggerSingleIncrementalLoad();

    const noDuplicates = await dashboard.verifyNoDuplicateProcessedRecords();
    await recordEvidence('assert-toBe-LIMAS-SUD-253-incremental-no-duplicate-records.spec-14', async () => expect(noDuplicates).toBe(true));
  });
});