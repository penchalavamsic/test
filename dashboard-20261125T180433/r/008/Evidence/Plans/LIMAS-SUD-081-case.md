# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Table Row Data" → "Row Data Completeness"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The "Pending License Requests" tab is active and the table contains at least one row.

# Test Steps

1. Action: Navigate to the dashboard and ensure the request table has rendered with data rows.
Expected Result: At least one data row exists.
2. Action: For each visible data row, verify the row contains: a non-empty user name paragraph and an email paragraph with @ in the first cell; a non-empty feature name paragraph and a version paragraph in the Feature cell; a quoted numeric hardware ID paragraph and a DD Mon YYYY date paragraph in the Hardware/Created cell; and an Approve button plus a Delete button in the Actions cell.
Expected Result: Every visible row has all four column groups popula

# Expected Final Result

Every visible data row in the pending requests table contains complete data across all four column groups.
