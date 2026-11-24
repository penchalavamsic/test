import { recordEvidence } from '../helpers/step-evidence';
import { test, expect } from '../fixtures/base';
import { SystemUserDashboardPage } from '../pages/system-user-dashboard.page';

test.describe('LIMAS-SUD-151: Approval submission (Data-changing)', () => {
  test('should approve a pending request and verify API and count update', async ({ page }) => {
    const recordId = process.env.TEST_RECORD_IDENTIFIER;
    const userGroup = process.env.TEST_USER_GROUP;
    const testProfile = process.env.TEST_PROFILE;
    const testRole = process.env.TEST_ROLE;
    const expDate = process.env.TEST_EXPIRATION_DATE;
    const maintDate = process.env.TEST_MAINTENANCE_DATE;

    test.skip(!recordId, 'TEST_RECORD_IDENTIFIER is required for data-changing approval test');    const dashboard = new SystemUserDashboardPage(page);
    await dashboard.waitForFullRender();
    await recordEvidence('action-click-LIMAS-SUD-151-approval-submission.spec-15', async () => dashboard.pendingRequestsTab.click());

    // Capture initial pending count
    const countText = await page.getByText(/loaded·/).textContent();
    const initialTotalMatch = countText?.match(/·(\d+)\s+total/);
    const initialTotal = initialTotalMatch ? parseInt(initialTotalMatch[1], 10) : null;

    // Locate request by identifier
    const requestRow = page.getByRole('button', { name: new RegExp(`Delete ${recordId}`) })
      .locator('..').locator('..').locator('..');

    await recordEvidence('assert-toBeVisible-LIMAS-SUD-151-approval-submission.spec-26', async () => expect(requestRow).toBeVisible({ timeout: 10_000 }));

    // Click Approve on that row
    const approveButton = requestRow.getByRole('button', { name: 'Approve' });
    await recordEvidence('action-click-LIMAS-SUD-151-approval-submission.spec-30', async () => approveButton.click());

    await recordEvidence('assert-toBeDisabled-LIMAS-SUD-151-approval-submission.spec-32', async () => expect(dashboard.approveFormApproveRequestButton).toBeDisabled());

    // Fill form
    await recordEvidence('action-click-LIMAS-SUD-151-approval-submission.spec-35', async () => dashboard.approveFormUserGroupCombobox.click());
    await recordEvidence('action-click-LIMAS-SUD-151-approval-submission.spec-36', async () => dashboard.approveFormListbox.getByRole('option', { name: userGroup }).click());

    await recordEvidence('action-click-LIMAS-SUD-151-approval-submission.spec-38', async () => dashboard.approveFormProfileCombobox.click());
    await recordEvidence('action-click-LIMAS-SUD-151-approval-submission.spec-39', async () => dashboard.approveFormListbox.getByRole('option', { name: testProfile }).click());

    await recordEvidence('assert-toBeVisible-LIMAS-SUD-151-approval-submission.spec-41', async () => expect(dashboard.approveFormRoleCombobox).toBeVisible({ timeout: 10_000 }));
    await recordEvidence('action-click-LIMAS-SUD-151-approval-submission.spec-42', async () => dashboard.approveFormRoleCombobox.click());
    await recordEvidence('action-click-LIMAS-SUD-151-approval-submission.spec-43', async () => dashboard.approveFormListbox.getByRole('option', { name: testRole }).click());

    await recordEvidence('assert-toBeVisible-LIMAS-SUD-151-approval-submission.spec-45', async () => expect(dashboard.approveFormExpirationDateLabel).toBeVisible({ timeout: 10_000 }));

    // Set Expiration Date (type into date input if available)
    const dateInput = page.getByLabel(/Expiration Date/).first();
    if (await dateInput.isVisible({ timeout: 3_000 }).catch(() => false)) {
      await recordEvidence('action-fill-LIMAS-SUD-151-approval-submission.spec-50', async () => dateInput.fill(expDate!));
    }

    // Set Maintenance Date if field is enabled
    const maintInput = page.getByLabel(/Maintenance Date/).first();
    if (await maintInput.isVisible({ timeout: 3_000 }).catch(() => false)) {
      await recordEvidence('action-fill-LIMAS-SUD-151-approval-submission.spec-56', async () => maintInput.fill(maintDate!));
    }

    // Verify Approve Request is enabled
    await recordEvidence('assert-toBeEnabled-LIMAS-SUD-151-approval-submission.spec-60', async () => expect(dashboard.approveFormApproveRequestButton).toBeEnabled({ timeout: 10_000 }));

    // Set up response watcher before clicking
    const responsePromise = page.waitForResponse(
      (resp) => resp.url().includes('/limas/api/') && resp.request().method() === 'PUT',
      { timeout: 15_000 }
    );

    // Submit exactly once
    await recordEvidence('action-click-LIMAS-SUD-151-approval-submission.spec-69', async () => dashboard.approveFormApproveRequestButton.click());

    // Verify API response
    const response = await responsePromise;
    await recordEvidence('assert-toBe-LIMAS-SUD-151-approval-submission.spec-73', async () => expect(response.status()).toBe(200));

    // Verify count decremented
    await recordEvidence('assert-toPass-LIMAS-SUD-151-approval-submission.spec-76', async () => expect(async () => {
      const newCountText = await page.getByText(/loaded·/).textContent();
      const newTotalMatch = newCountText?.match(/·(\d+)\s+total/);
      if (newTotalMatch && initialTotal !== null) {
        await recordEvidence('assert-toBeLessThan-LIMAS-SUD-151-approval-submission.spec-80', async () => expect(parseInt(newTotalMatch[1], 10)).toBeLessThan(initialTotal));
      }
    }).toPass({ timeout: 15_000 }));
  });
});