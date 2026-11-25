# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Role Reset When Profile Changes"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; A User Group is selected, and the Profile listbox has at least two options.; A Profile and Role have been selected.

# Test Steps

1. Action: Select User Group, select first Profile, then select a Role.
Expected Result: Role combobox displays the selected Role name.
2. Action: Change the Profile by selecting a different Profile option.
Expected Result: Role combobox resets to its initial placeholder/empty state.
3. Action: Verify date fields also reset.
Expected Result: Expiration Date and Maintenance Date fields return to their unselected state.

# Expected Final Result

Changing the Profile clears any previously selected Role and resets dependent date fields.
