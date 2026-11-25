# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Table Row Data" → "User Email Visible"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The "Pending License Requests" tab is active and the table contains at least one row.

# Test Steps

1. Action: Navigate to the dashboard and ensure the request table has rendered with at least one row.
Expected Result: At least one table row exists.
2. Action: In the first data row, locate the User column cell and verify it contains a paragraph whose text includes `@`.
Expected Result: The email paragraph is visible and its text content contains the `@` character.

# Expected Final Result

At least one row in the pending requests table displays an email paragraph containing `@`.
