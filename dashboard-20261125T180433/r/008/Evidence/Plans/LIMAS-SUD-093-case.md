# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "User Group Combobox Enabled"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.

# Test Steps

1. Action: Open the inline approval form.
Expected Result: Form is visible with User Group combobox.
2. Action: Check the enabled state of the User Group combobox.
Expected Result: The combobox is enabled — no `disabled` attribute or `aria-disabled="true"`.

# Expected Final Result

The User Group combobox is enabled and ready for interaction when the form opens.
