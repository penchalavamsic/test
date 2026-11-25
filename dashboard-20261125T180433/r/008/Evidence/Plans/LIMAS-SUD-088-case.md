# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Close Button Closes Form & Reverts to Approve"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is currently open (Approve was clicked, now showing Close).

# Test Steps

1. Action: Click Approve on first pending request row to open the inline form.
Expected Result: Inline form opens, button text is "Close".
2. Action: Click the Close button.
Expected Result: The inline form disappears and the button text reverts to "Approve".
3. Action: Verify the button is no longer in expanded state.
Expected Result: aria-expanded is "false" or absent.

# Expected Final Result

Clicking Close when the form is open closes the form and the button returns to its original "Approve" state.
