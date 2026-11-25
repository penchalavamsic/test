# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Role Dynamic Selection"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; A User Group and Profile have been selected.; The Role options list is open.

# Test Steps

1. Action: Open form, select User Group, select Profile, click Role combobox.
Expected Result: Role options listbox appears.
2. Action: Select the first option in the Role listbox.
Expected Result: The listbox closes and the combobox displays the selected Role name.

# Expected Final Result

Selecting a Role option updates the combobox displayed value dynamically.
