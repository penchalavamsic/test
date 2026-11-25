# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Table Row Data" → "Created Date Visible"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The "Pending License Requests" tab is active and the table contains at least one row.

# Test Steps

1. Action: Navigate to the dashboard and ensure the request table has rendered with at least one row.
Expected Result: At least one table row exists.
2. Action: In the first data row, locate the Hardware / Created column cell and verify it contains a paragraph whose text matches the `DD Mon YYYY` date format.
Expected Result: The date paragraph is visible and matches the pattern of two digits, a three-letter month abbreviation, and a four-digit year.

# Expected Final Result

At least one row in the pending requests table displays a date paragraph matching the `DD Mon YYYY` pattern.
