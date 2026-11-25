# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "User Group Dynamic Selection"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; The User Group options list is open.

# Test Steps

1. Action: Open the inline approval form and click the User Group combobox.
Expected Result: Options listbox appears.
2. Action: Select the first option in the listbox.
Expected Result: The listbox closes and the combobox displays the selected User Group name (no longer shows "Select User Group").

# Expected Final Result

Selecting a User Group option updates the combobox displayed value dynamically.
