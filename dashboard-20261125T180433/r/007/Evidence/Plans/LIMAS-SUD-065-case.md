# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Table" → "Request Rows Present"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: The Pending License Requests section is visible.
2. Action: Locate the table element by its role.
Expected Result: A table with role="table" is visible.
3. Action: Count the data rows in the table (excluding the header row).
Expected Result: At least 1 data row exists — `count() > 1` (accounting for header row) or at least one row with Approve/Delete buttons.

# Expected Final Result

The data table is visible and contains at least one pending license request row.
