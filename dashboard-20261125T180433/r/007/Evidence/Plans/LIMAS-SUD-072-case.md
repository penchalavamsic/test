# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Table Row Data" → "Feature Name Visible"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The "Pending License Requests" tab is active and the table contains at least one row.

# Test Steps

1. Action: Navigate to the dashboard and ensure the request table has rendered with at least one row.
Expected Result: At least one table row exists.
2. Action: In the first data row, locate the Feature column cell and verify it contains a paragraph with a non-empty feature name.
Expected Result: The feature name paragraph is visible and contains text (not empty).

# Expected Final Result

At least one row in the pending requests table displays a non-empty feature name paragraph.
