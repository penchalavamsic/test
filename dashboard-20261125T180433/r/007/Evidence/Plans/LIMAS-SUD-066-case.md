# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Table Columns" → "User Column Heading"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The "Pending License Requests" tab is active and the table has rendered.

# Test Steps

1. Action: Navigate to the dashboard and ensure the Pending License Requests table is rendered.
Expected Result: At least one row or the table header is visible.
2. Action: Locate the column header with exact text "User" within the table.
Expected Result: The header cell or element with text "User" is visible and belongs to the table header row.

# Expected Final Result

The "User" column heading is visible in the Pending License Requests table header.
