# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Table Row Data" → "Feature Version Visible"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The "Pending License Requests" tab is active and the table contains at least one row.

# Test Steps

1. Action: Navigate to the dashboard and ensure the request table has rendered with at least one row.
Expected Result: At least one table row exists.
2. Action: In the first data row, locate the Feature column cell and verify it contains a paragraph whose text matches a `Version` prefix followed by a dotted-number pattern.
Expected Result: The version paragraph is visible and its text matches `/Version \d+\.\d+\.\d+/`.

# Expected Final Result

At least one row in the pending requests table displays a version paragraph matching the `Version N.N.N` pattern.
