# Purpose

To verify the functionality of "System User Dashboard" → "Header" → "Theme Control" → "Enabled State"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Locate the second button inside the header (theme control).
Expected Result: The theme button is enabled, not disabled.

# Expected Final Result

The theme control (moon/sun icon button) is in an enabled state.
