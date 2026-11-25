# Purpose

To verify the functionality of "System User Dashboard" → "Header" → "Language Control" → "Current Language Indicator"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Click the language control to open the menu.
Expected Result: Menu with role "menu" appears.
3. Action: Check which menuitem has a visual selection indicator (bg-accent class).
Expected Result: At least one menuitem has the `bg-accent` class, indicating the currently selected language. The default selected language is "English".

# Expected Final Result

The current language (English) is visually indicated within the opened language menu.
