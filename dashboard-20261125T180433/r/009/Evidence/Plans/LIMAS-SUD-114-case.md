# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Approve Request Enabled Only After All Required Fields Filled"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.

# Test Steps

1. Action: Open the inline approval form.
Expected Result: Approve Request button is disabled.
2. Action: Select a User Group (first option).
Expected Result: Approve Request button remains disabled.
3. Action: Select a Profile (first option).
Expected Result: Approve Request button remains disabled (Role and Expiration Date still unfilled).
4. Action: Select a Role (first option) and set an Expiration Date.
Expected Result: Approve Request button becomes enabled.

# Expected Final Result

The "Approval Request" button is enabled only when all required fields (User Group, Profile, Role, Expiration Date) are populated.
