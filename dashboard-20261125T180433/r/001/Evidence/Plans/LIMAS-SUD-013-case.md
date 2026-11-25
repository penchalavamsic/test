# Purpose

To verify the functionality of "System User Dashboard" → "Header" → "Language Control" → "Menu Opening"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Click the language control (first button in header).
Expected Result: A menu with role "menu" appears containing menuitems.
3. Action: Verify the menu is visible and contains at least one menuitem.
Expected Result: The menu is visible with role "menu" and menuitem children.

# Expected Final Result

Clicking the language control opens a menu containing language options.
