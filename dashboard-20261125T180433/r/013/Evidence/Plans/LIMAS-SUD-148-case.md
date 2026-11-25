# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Approve Request Disabled When Profile Missing"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; A User Group has been selected.; Profile has NOT been selected.

# Test Steps

1. Action: Open form and select a User Group.
Expected Result: User Group combobox displays the selected value. Profile combobox still shows "Select Profile".
2. Action: Verify Approve Request button state.
Expected Result: Approve Request button is disabled.
3. Action: Select a Profile.
Expected Result: Approve Request button is no longer disabled solely due to missing Profile (may still require other fields).

# Expected Final Result

Approve Request remains disabled after User Group selection until Profile is also selected.
