# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Escape Key Closes Form"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.

# Test Steps

1. Action: Click Approve to open the inline form.
Expected Result: Form is visible, button reads "Close".
2. Action: Press the Escape key.
Expected Result: The form closes. The row button reverts from "Close" to "Approve".
3. Action: Verify no submission was triggered.
Expected Result: The pending request row is unchanged.

# Expected Final Result

Pressing Escape closes the approval form without submitting, identical to clicking Cancel or Close.
