# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Profile* Label Visibility"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.

# Test Steps

1. Action: Open the inline approval form.
Expected Result: Form is visible.
2. Action: Locate the label "Profile*" within the form.
Expected Result: The label is visible and includes the text "Profile" with a trailing asterisk.

# Expected Final Result

The "Profile*" label is visible in the inline approval form.
