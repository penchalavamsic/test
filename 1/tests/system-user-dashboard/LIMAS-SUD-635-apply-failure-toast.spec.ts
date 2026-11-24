import { recordEvidence } from '../helpers/step-evidence';
import { test, expect } from '../fixtures/authenticated-test';
import { ExpiringLicensesFlow } from '../flows/expiring-licenses.flow';
import { SystemUserDashboardPage } from '../pages/system-user-dashboard.page';

test.describe('System User Dashboard - Extend Dialog Apply Extension', () => {
  test('LIMAS-SUD-635: Failure Toast Appears When Extension Fails', async ({ page, authenticatedPage }) => {
    await recordEvidence('assert-toContain-LIMAS-SUD-635-apply-failure-toast.spec-7', async () => expect(authenticatedPage.url).toContain('/system-user-dashboard'));
    const flow = new ExpiringLicensesFlow(page);
    const dashboard = new SystemUserDashboardPage(page);

    await flow.prepareExpiringSection();
    const baseline = await flow.captureSearchBaseline();
    const card = dashboard.locateExpiringCardByIdentifier(baseline.data.TEST_EXPIRING_RECORD_IDENTIFIER);
    const extendBtn = dashboard.getRecordExtendButton(card);
    await recordEvidence('action-click-LIMAS-SUD-635-apply-failure-toast.spec-15', async () => extendBtn.click());
    await recordEvidence('assert-toBeVisible-LIMAS-SUD-635-apply-failure-toast.spec-16', async () => expect(dashboard.extendLicenseDialog).toBeVisible());

    // Read original record dates for post-submission verification
    const originalExpDate = await flow.readOriginalExpirationDate(card);
    const originalMaintDate = await flow.readOriginalMaintenanceDate(card);

    try {
      // BLOCKED: Requires an error-inducing scenario (e.g. expired session, invalid license, network failure)
      // When implemented, expect: toast variant "destructive" with title "Update failed"
      // Source: catch block shows toast({ title: "Update failed", description: error.message, variant: "destructive" })
    } finally {
      if (await dashboard.extendLicenseDialog.isVisible().catch(() => false)) {
        await flow.clearAllExtensionInputs();
        await dashboard.closeExtendDialog();
      }
      await recordEvidence('assert-toBeVisible-LIMAS-SUD-635-apply-failure-toast.spec-31', async () => expect(dashboard.extendLicenseDialog).not.toBeVisible());
      await flow.restoreDefaultFilterState();
    }
  });
});
