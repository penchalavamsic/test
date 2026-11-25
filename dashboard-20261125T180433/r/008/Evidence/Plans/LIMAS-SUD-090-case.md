# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "User Group* Label Visibility"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.

# Test Steps

1. Action: Open the inline approval form via Approve button.
Expected Result: Inline form is visible.
2. Action: Locate the label "User Group*" within the form.
Expected Result: The label is visible and contains the text "User Group" with a trailing asterisk indicating required.

# Expected Final Result

The "User Group*" label is visible in the inline approval form.
