# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Actions Column" → "Delete Button Enabled"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The "Pending License Requests" tab is active and the table contains at least one row.

# Test Steps

1. Action: Navigate to the dashboard and ensure the request table has rendered with at least one row.
Expected Result: At least one data row exists with a Delete button.
2. Action: For each visible data row, verify the "Delete" button is enabled.
Expected Result: Every visible Delete button has no `disabled` attribute and is enabled for interaction.

# Expected Final Result

Every visible Delete button in the pending requests table is enabled.
