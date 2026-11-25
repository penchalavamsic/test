# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Profile Reset When User Group Changes"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; The User Group listbox has at least two options.; A User Group and Profile have been selected.

# Test Steps

1. Action: Select the first User Group option, then select a Profile.
Expected Result: Profile combobox displays the selected Profile name.
2. Action: Change the User Group by selecting a different option.
Expected Result: Profile combobox resets to "Select Profile" placeholder.
3. Action: Verify that dependent fields also reset.
Expected Result: Role and date fields return to their initial unselected state.

# Expected Final Result

Changing the User Group clears any previously selected Profile and resets dependent fields.
