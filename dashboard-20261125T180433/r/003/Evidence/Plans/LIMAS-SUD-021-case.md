# Purpose

To verify the functionality of "System User Dashboard" → "Header" → "Theme Control" → "Light to Dark Switch"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard` in light theme.

# Test Steps

1. Action: Navigate to the dashboard and confirm light theme.
Expected Result: Dashboard loaded with light theme (no `dark` class, moon icon visible).
2. Action: Click the theme control button.
Expected Result: The `dark` class is added to `<html>`, the moon icon is replaced by the sun icon.
3. Action: Verify all header elements remain visible in dark theme.
Expected Result: LIMAS logo, header controls, and dashboard heading "System User Dashboard" remain visible.
4. Action: Restore original light theme by clicking the theme control again.
Expected Result: The `dark` class is removed from `<ht

# Expected Final Result

Clicking the theme control switches to dark theme (html.dark added, sun icon visible). After restoration, the original light theme is re-applied.
