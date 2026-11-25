# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "History Switch" → "Switch Enabled"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: The Pending License Requests section is visible.
2. Action: Locate the history switch.
Expected Result: The switch is visible.
3. Action: Assert the switch is enabled.
Expected Result: `.toBeEnabled()` passes on the switch.

# Expected Final Result

The history switch is enabled and ready for interaction.
