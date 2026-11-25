# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Expiration Date Clear Action"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; A User Group and Profile have been selected.; A date has been entered in the Expiration Date field.

# Test Steps

1. Action: Select User Group, Profile, and type a future date into Expiration Date.
Expected Result: Expiration Date field has a value.
2. Action: Clear the Expiration Date field (select all + delete, or use clear button).
Expected Result: The field becomes empty.
3. Action: Verify Approve Request button state.
Expected Result: Approve Request becomes disabled because Expiration Date is required but not filled.

# Expected Final Result

Clearing the Expiration Date empties the field and causes Approve Request to become disabled.
