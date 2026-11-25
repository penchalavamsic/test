# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Approve Request Disabled When User Group Missing"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; User Group is the only required field that has NOT been filled.

# Test Steps

1. Action: Open the form and leave User Group unselected.
Expected Result: User Group combobox shows "Select User Group".
2. Action: Verify Approve Request button state.
Expected Result: Approve Request button is disabled (cannot be clicked).
3. Action: Select a User Group.
Expected Result: Approve Request button is no longer disabled solely due to missing User Group (may still require other fields).

# Expected Final Result

Approve Request is disabled until User Group (and all other required fields) are filled.
