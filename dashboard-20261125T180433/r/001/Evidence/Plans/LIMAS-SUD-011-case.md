# Purpose

To verify the functionality of "System User Dashboard" → "Header" → "Language Control" → "Enabled State"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Locate the first button inside the header (globe icon, language control).
Expected Result: The language button is enabled, not disabled.

# Expected Final Result

The language control (globe icon button) is in an enabled state.
