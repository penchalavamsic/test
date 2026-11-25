# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Form Focus Order via Tab Key"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; All form fields are visible (User Group and Profile selected to reveal all fields).

# Test Steps

1. Action: Open form, select User Group and Profile to reveal all fields, then click the User Group combobox to start focus.
Expected Result: User Group combobox is focused.
2. Action: Press Tab repeatedly and track focused element roles/labels.
Expected Result: Focus moves through: User Group combobox → Profile combobox → Role combobox → Expiration Date input → Maintenance Date input → Cancel button → Approve Request button → Close button (or cycles back).
3. Action: Verify all form fields are reachable via Tab.
Expected Result: No field is skipped; the focus order makes logical sense top-to-

# Expected Final Result

Tab key navigates through form fields in a logical top-to-bottom order with no fields skipped.
