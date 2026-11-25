# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "User Group Required Asterisk Visible"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.

# Test Steps

1. Action: Open the inline approval form.
Expected Result: Form with "License Assignment" heading is visible.
2. Action: Locate the label text containing "User Group" and verify it ends with `*`.
Expected Result: The label reads "User Group*" — the asterisk confirms the field is required.

# Expected Final Result

The User Group label includes a visible `*` indicating the field is required.
