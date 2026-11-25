# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Role* Combobox Appears After Profile Selection"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; A User Group and Profile have been selected.

# Test Steps

1. Action: Open the inline approval form and verify the Role combobox is not present before Profile selection.
Expected Result: Role combobox is absent — not in the DOM.
2. Action: Select a User Group, then select a Profile.
Expected Result: After Profile selection, the Role* combobox appears in the form.
3. Action: Verify the Role combobox is visible with a "Role*" label.
Expected Result: A combobox labeled "Role*" is now present and visible.

# Expected Final Result

The Role* combobox is conditionally visible — present only after a Profile is selected.
