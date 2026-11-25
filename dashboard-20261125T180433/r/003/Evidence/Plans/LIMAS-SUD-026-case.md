# Purpose

To verify the functionality of "System User Dashboard" → "Header" → "Account Control" → "Menu Closing & Session Stability"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Click the account button to open the user menu.
Expected Result: Menu with role "menu" appears.
3. Action: Press Escape to close the user menu.
Expected Result: The menu is no longer visible. The page URL still contains `/system-user-dashboard`.
4. Action: Verify the dashboard heading is still visible.
Expected Result: The "System User Dashboard" heading remains visible, confirming session persistence.

# Expected Final Result

Closing the user menu does not disrupt the authenticated session; the dashboard route and heading remain intact.
