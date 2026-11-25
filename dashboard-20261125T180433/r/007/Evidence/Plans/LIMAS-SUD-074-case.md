# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Table Row Data" → "Hardware ID Visible"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The "Pending License Requests" tab is active and the table contains at least one row.

# Test Steps

1. Action: Navigate to the dashboard and ensure the request table has rendered with at least one row.
Expected Result: At least one table row exists.
2. Action: In the first data row, locate the Hardware / Created column cell and verify it contains a paragraph whose text is a quoted numeric string (digits inside double quotes).
Expected Result: The hardware ID paragraph is visible and matches the pattern of a quoted number.

# Expected Final Result

At least one row in the pending requests table displays a hardware ID paragraph containing a quoted numeric value.
