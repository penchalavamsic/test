# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "User Group Combobox Visible"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.

# Test Steps

1. Action: Open the inline approval form.
Expected Result: Form is visible.
2. Action: Locate the User Group combobox associated with the "User Group*" label.
Expected Result: A combobox or dropdown element is present and visible.

# Expected Final Result

The User Group combobox is visible in the inline approval form.
