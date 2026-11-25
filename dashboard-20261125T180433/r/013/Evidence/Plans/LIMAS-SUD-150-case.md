# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Approve Request Enabled After All Required Fields"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.

# Test Steps

1. Action: Open the approve form on the first pending request.
Expected Result: Form opens with Approve Request disabled.
2. Action: Select a User Group from the dropdown.
Expected Result: Approve Request still disabled.
3. Action: Select a Profile from the dropdown.
Expected Result: Approve Request still disabled.
4. Action: Select a Role from the dropdown.
Expected Result: Approve Request still disabled (Expiration Date missing).
5. Action: Select an Expiration Date.
Expected Result: Approve Request becomes enabled after all required fields filled.
6. Action: Close the form via Cancel withou

# Expected Final Result

Approve Request button becomes enabled only when User Group, Profile, Role, and Expiration Date are all selected.
