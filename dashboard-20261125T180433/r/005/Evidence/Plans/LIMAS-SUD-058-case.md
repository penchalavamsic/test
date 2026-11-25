# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Search Field" → "Search Field Enabled"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: The Pending License Requests section is visible.
2. Action: Locate the search textbox.
Expected Result: The textbox is visible.
3. Action: Assert the textbox is enabled.
Expected Result: The textbox is not disabled — `.toBeEnabled()` passes.

# Expected Final Result

The search textbox is enabled and ready for user input.
