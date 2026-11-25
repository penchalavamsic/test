# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "History Switch" → "Accessible Name"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard, wait for full render, and click the Pending License Requests card.
Expected Result: The license request table is visible.
2. Action: Locate the history toggle switch by its accessible name.
Expected Result: The switch is visible and has accessible name "Show License Request History".
3. Action: Verify the switch has role="switch".
Expected Result: The element has `role="switch"`.

# Expected Final Result

The history toggle has a proper accessible name ("Show License Request History") and the correct ARIA role of "switch".
