# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Profile Dynamic Selection"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; A User Group has been selected and the Profile options list is open.

# Test Steps

1. Action: Select a User Group, then click the Profile combobox to open the options list.
Expected Result: Profile options listbox appears.
2. Action: Select the first option in the Profile listbox.
Expected Result: The listbox closes and the combobox displays the selected Profile name.

# Expected Final Result

Selecting a Profile option updates the combobox displayed value dynamically, and dependent fields (Role) may appear.
