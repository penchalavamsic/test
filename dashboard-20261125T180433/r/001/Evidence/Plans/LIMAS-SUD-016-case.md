# Purpose

To verify the functionality of "System User Dashboard" → "Header" → "Language Control" → "Menu Closing"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Click the language control to open the menu.
Expected Result: Menu with role "menu" appears.
3. Action: Press Escape to close the menu.
Expected Result: The menu is no longer visible or present in the DOM.
4. Action: Verify the authenticated route is unchanged.
Expected Result: The page URL still contains `/system-user-dashboard` and the dashboard heading remains visible.

# Expected Final Result

The language menu closes on Escape and the authenticated session remains on the dashboard.
