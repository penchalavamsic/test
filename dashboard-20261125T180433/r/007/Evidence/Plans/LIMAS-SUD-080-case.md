# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Table Row Data" → "Date Format Consistency"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The "Pending License Requests" tab is active and the table contains at least one row.

# Test Steps

1. Action: Navigate to the dashboard and ensure the request table has rendered with data rows.
Expected Result: At least one data row exists.
2. Action: For each visible data row, locate the date paragraph in the Hardware / Created column and verify its text matches the `DD Mon YYYY` format.
Expected Result: Every date paragraph matches the pattern `\d{2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}`.

# Expected Final Result

Every created date in the pending requests table consistently matches the `DD Mon YYYY` format.
