# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Profile Initial State — Placeholder Before User Group"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; No User Group has been selected.

# Test Steps

1. Action: Open the inline approval form.
Expected Result: Form is visible.
2. Action: Inspect the Profile combobox before selecting any User Group.
Expected Result: The placeholder text "Select Profile" is displayed. The Profile combobox is visible.

# Expected Final Result

The Profile combobox shows "Select Profile" placeholder before a User Group is selected.
