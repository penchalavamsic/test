# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Selected Row Remains Visually Distinct When Form Open"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; At least one pending license request row is visible with an Approve button.; The inline approval form is open on that row.

# Test Steps

1. Action: Click Approve on a row to open the form.
Expected Result: The button on that row changes to "Close" with aria-expanded="true".
2. Action: Inspect other rows.
Expected Result: Other rows' Approve buttons still read "Approve" and are not expanded. Only the row with the open form has a "Close" button.
3. Action: Verify the form is positioned within or directly after the row.
Expected Result: The form is visually associated with the selected row (the row with "Close" button).

# Expected Final Result

The row with an open form is uniquely identifiable by its "Close" button and expanded state, distinguishing it from all other rows.
