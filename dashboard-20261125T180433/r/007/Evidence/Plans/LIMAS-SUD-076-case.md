# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Actions Column" → "Approve Button Visible"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The "Pending License Requests" tab is active and the table contains at least one row.

# Test Steps

1. Action: Navigate to the dashboard and ensure the request table has rendered with at least one row.
Expected Result: At least one data row exists.
2. Action: For each visible data row, locate the "Approve" button by its accessible name or role.
Expected Result: Every visible data row contains a visible "Approve" button.

# Expected Final Result

Every visible data row in the pending requests table contains a visible "Approve" button.
