# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "History Switch" → "Switch Visible"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: The Pending License Requests section is visible.
2. Action: Locate the switch control by its role and accessible name.
Expected Result: The switch with name matching "Show License Request History" is visible.

# Expected Final Result

The "Show License Request History" switch is visible in the section.
