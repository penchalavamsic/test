# Purpose

To verify the functionality of "System User Dashboard" → "Header" → "Language Control" → "Language Options"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Click the language control to open the menu.
Expected Result: Menu with role "menu" appears.
3. Action: Locate menuitems inside the menu.
Expected Result: Three menuitems are present: "English", "Deutsch", and "Français".

# Expected Final Result

The language menu contains exactly three options: English, Deutsch, and Français.
