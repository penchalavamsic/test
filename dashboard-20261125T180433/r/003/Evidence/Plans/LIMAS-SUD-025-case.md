# Purpose

To verify the functionality of "System User Dashboard" → "Header" → "Account Control" → "User Menu Opening"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Click the account button.
Expected Result: A menu with role "menu" appears containing a menuitem.
3. Action: Verify the Logout menuitem is visible and enabled.
Expected Result: The menuitem "Logout" is visible and enabled. Do not click Logout.

# Expected Final Result

Clicking the account button opens a user menu with a visible and enabled Logout option.
