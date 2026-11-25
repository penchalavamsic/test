# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Profile Required Asterisk Visible"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.

# Test Steps

1. Action: Open the inline approval form.
Expected Result: Form is visible.
2. Action: Locate the label text containing "Profile" and verify it ends with `*`.
Expected Result: The label reads "Profile*" — visible asterisk confirms required field.

# Expected Final Result

The Profile label includes a visible `*` indicating the field is required.
