# Purpose

To verify the functionality of "System User Dashboard" → "Header" → "Theme Control" → "Visibility"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Locate the second button inside the header (moon or sun icon, theme control).
Expected Result: The theme button is visible and enabled.

# Expected Final Result

The theme control (moon/sun icon button) is visible in the dashboard header.
