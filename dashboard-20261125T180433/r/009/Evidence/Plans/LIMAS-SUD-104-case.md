# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Role Options List Appears"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; A User Group and Profile have been selected.; The Role combobox is visible.

# Test Steps

1. Action: Open form, select User Group, select Profile, then click the Role combobox.
Expected Result: A listbox/dropdown appears with Role options.
2. Action: Verify at least one Role option is present.
Expected Result: The listbox contains one or more selectable Role options (e.g., Standard, AGCOT, asasasa).

# Expected Final Result

Clicking the Role combobox reveals a listbox with Role options populated based on the selected Profile.
