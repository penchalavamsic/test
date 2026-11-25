# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Single Form Open at a Time — Opening Another Closes Previous"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; At least two pending license request rows are visible with Approve buttons.

# Test Steps

1. Action: Click Approve on the first pending request row.
Expected Result: Inline form opens. The first row's button changes to "Close".
2. Action: Click Approve on a second pending request row.
Expected Result: The first form closes, the first row's button reverts to "Approve". A new inline form opens on the second row, and its button changes to "Close".
3. Action: Verify only one form is visible.
Expected Result: Only one License Assignment heading is visible at a time.

# Expected Final Result

Opening Approve on a second row closes the first row's form and opens the form on the second row. Only one form exists at any time.
