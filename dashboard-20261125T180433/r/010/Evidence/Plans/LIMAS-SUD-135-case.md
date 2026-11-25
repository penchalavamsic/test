# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "User Group Keyboard Selection via Arrow Keys"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; The User Group combobox is focused.

# Test Steps

1. Action: Open the User Group combobox by clicking it.
Expected Result: User Group listbox appears with at least one option.
2. Action: Press ArrowDown to highlight the next option.
Expected Result: Focus/active-descendant moves to the next option in the list.
3. Action: Press Enter to select the highlighted option.
Expected Result: The listbox closes and the selected option is displayed in the combobox.

# Expected Final Result

Arrow keys navigate User Group options and Enter selects the highlighted option, confirming keyboard accessibility of the combobox.
