# Purpose

To verify the functionality of "System User Dashboard" → "Header" → "Theme Control" → "Theme State Indicator"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard` in light theme.

# Test Steps

1. Action: Navigate to the dashboard and confirm light theme.
Expected Result: Dashboard loaded, moon icon (lucide-moon) is visible.
2. Action: Click the theme control button.
Expected Result: Sun icon (lucide-sun) is now visible; moon icon is hidden.
3. Action: Click the theme control again to restore light theme.
Expected Result: Moon icon (lucide-moon) is visible again; sun icon is hidden.

# Expected Final Result

The theme control icon correctly reflects the current theme: moon for light, sun for dark.
