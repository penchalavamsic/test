# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Table Row Data" → "User Name Visible"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The "Pending License Requests" tab is active and the table contains at least one row.

# Test Steps

1. Action: Navigate to the dashboard and ensure the request table has rendered with at least one row.
Expected Result: At least one table row exists in the pending requests section.
2. Action: In the first data row, locate the User column cell and verify it contains a paragraph with a non-empty user name.
Expected Result: The user name paragraph is visible and contains text (not empty, not whitespace-only).

# Expected Final Result

At least one row in the pending requests table displays a non-empty user name paragraph.
