# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Approve Request Disabled When Expiration Date Missing"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open with User Group, Profile, and Role selected.

# Test Steps

1. Action: Open the approve form on the first pending request.
Expected Result: Form opens; Approve Request button is disabled.
2. Action: Select a User Group from the dropdown.
Expected Result: User Group value is displayed.
3. Action: Select a Profile from the dropdown.
Expected Result: Profile value is displayed. Role and Expiration Date fields become visible.
4. Action: Select a Role from the dropdown.
Expected Result: Role value is displayed. Approve Request remains disabled because Expiration Date is still empty.
5. Action: Verify Approve Request button state.
Expected Result: Approve Re

# Expected Final Result

Approve Request button remains disabled when Expiration Date is not selected.
