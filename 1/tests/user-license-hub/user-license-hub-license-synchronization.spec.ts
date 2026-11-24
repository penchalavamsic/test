import { resolveProfileName } from '../helpers/auth';
import { recordEvidence } from '../helpers/step-evidence';
import { test, expect } from '../fixtures/base';
import { AuthenticationFlow } from '../flows/authentication.flow';
import { SystemUserDashboardPage } from '../pages/system-user-dashboard.page';
import { UserLicenseHubPage } from '../pages/user-license-hub.page';

const PROFILE = resolveProfileName();

test.describe('User & License Hub — License Synchronization', () => {
  test.beforeEach(async ({ page }) => {
    const flow = new AuthenticationFlow(page);
    await flow.ensureAuthenticated(PROFILE);
    const dashboard = new SystemUserDashboardPage(page);
    await dashboard.waitForFullRender();
    const hub = new UserLicenseHubPage(page);
    await hub.openUserLicenseHub();
    await hub.waitForHubLoad();
  });

  test('LIMAS-SUD-994: License panel card count matches selected user badge count', async ({ page }) => {
    const hub = new UserLicenseHubPage(page);

    const selIdx = await hub.getSelectedUserCardIndex();
    await recordEvidence('assert-toBeGreaterThanOrEqual-user-license-hub-license-synchronization.spec-23', async () => expect(selIdx).toBeGreaterThanOrEqual(0));

    await hub.verifyLicenseCountMatchesBadge(selIdx);
  });

  test('LIMAS-SUD-995: Assigned-to on license cards matches selected user name', async ({ page }) => {
    const hub = new UserLicenseHubPage(page);

    const selIdx = await hub.getSelectedUserCardIndex();
    await recordEvidence('assert-toBeGreaterThanOrEqual-user-license-hub-license-synchronization.spec-32', async () => expect(selIdx).toBeGreaterThanOrEqual(0));

    await hub.verifyAssignedToMatchesSelection(selIdx);
  });

  test('LIMAS-SUD-996: No stale license cards after switching users', async ({ page }) => {
    const hub = new UserLicenseHubPage(page);

    const selIdx = await hub.getSelectedUserCardIndex();
    const otherIdx = selIdx === 0 ? 1 : 0;

    // Get current assigned-to name
    const firstName = (await hub.userCardNames.nth(selIdx).textContent())?.trim();

    // Switch user
    await hub.selectUserByIndex(otherIdx);

    // All license cards should now belong to the new user
    const licenses = await hub.getLicensePanelRuntimeData();
    const otherName = (await hub.userCardNames.nth(otherIdx).textContent())?.trim() ?? '';

    for (const lic of licenses) {
      await recordEvidence('assert-toBe-user-license-hub-license-synchronization.spec-54', async () => expect(lic.assignedToName).toBe(otherName));
    }
  });

  test('LIMAS-SUD-997: No duplicate license cards displayed', async ({ page }) => {
    const hub = new UserLicenseHubPage(page);

    const licenses = await hub.getLicensePanelRuntimeData();
    await recordEvidence('assert-toBeGreaterThan-user-license-hub-license-synchronization.spec-62', async () => expect(licenses.length).toBeGreaterThan(0));

    const keys = licenses.map((l) => `${l.profile}|${l.hardwareId}`);
    const unique = new Set(keys);
    await recordEvidence('assert-toBe-user-license-hub-license-synchronization.spec-66', async () => expect(unique.size).toBe(licenses.length));
  });

  test('LIMAS-SUD-998: Download, Email, and Add License toolbar buttons are enabled when a user is selected', async ({ page }) => {
    const hub = new UserLicenseHubPage(page);

    // Auto-selected user should have toolbar enabled (if user has licenses)
    const badgeCount = await hub.getUserCardBadgeCount(0);
    if (badgeCount > 0) {
      await hub.verifyToolbarButtonsEnabled();
    }
  });

  test('LIMAS-SUD-999: Toolbar button state tracks user selection', async ({ page }) => {
    const hub = new UserLicenseHubPage(page);

    const selIdx = await hub.getSelectedUserCardIndex();
    const otherIdx = selIdx === 0 ? 1 : 0;

    // First user toolbar state
    const badgeCount0 = await hub.getUserCardBadgeCount(selIdx);

    // Switch users
    await hub.selectUserByIndex(otherIdx);
    const badgeCount1 = await hub.getUserCardBadgeCount(otherIdx);

    // Toolbar should be enabled for any selected user with licenses
    if (badgeCount1 > 0) {
      await recordEvidence('assert-toBeEnabled-user-license-hub-license-synchronization.spec-94', async () => expect(hub.downloadButton).toBeEnabled());
    }
  });
});