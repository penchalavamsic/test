# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Profile Options Populate After User Group Selection"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; A User Group has been selected from the User Group combobox.

# Test Steps

1. Action: Open the inline approval form, click User Group combobox, select the first option.
Expected Result: User Group selection is reflected in the combobox.
2. Action: Click the Profile combobox.
Expected Result: A listbox/dropdown appears with Profile options populated for the selected User Group.
3. Action: Verify at least one Profile option is present.
Expected Result: The listbox contains one or more selectable Profile options.

# Expected Final Result

After selecting a User Group, the Profile combobox listbox is populated with options.
