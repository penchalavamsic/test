# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Table" → "Incremental loading indicator"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The Pending License Requests tab is selected and the initial rows are loaded.

# Test Steps

1. Action: Navigate to the dashboard, ensure the Pending License Requests tab is active, and confirm the table is visible.
Expected Result: The table is visible with at least one data row.
2. Action: Look for the text "More requests will load automatically." near or below the table.
Expected Result: The text is visible, indicating to the user that more data can be loaded by scrolling.

# Expected Final Result

The incremental loading hint text "More requests will load automatically." is visible.
