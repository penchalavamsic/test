# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Cancel Closes Form Without Saving"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.

# Test Steps

1. Action: Open the inline approval form via Approve button.
Expected Result: Form is visible, Approve button now reads "Close".
2. Action: Click the Cancel button within the form.
Expected Result: The inline form disappears. The row button reverts to "Approve".
3. Action: Verify no API submission was triggered.
Expected Result: The pending request row is unchanged — no success/error toast or state change.

# Expected Final Result

Clicking Cancel closes the form, reverts the button to Approve, and does not submit any data.
