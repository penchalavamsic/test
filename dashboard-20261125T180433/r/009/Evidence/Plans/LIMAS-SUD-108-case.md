# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Maintenance Date Label Visibility"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; A User Group and Profile have been selected.

# Test Steps

1. Action: Open form, select User Group, select Profile to reveal Expiration Date.
Expected Result: Expiration Date* label and input are visible.
2. Action: Look for "Maintenance Date" label in the form.
Expected Result: A "Maintenance Date" label (likely without required asterisk) is visible with its associated date input.

# Expected Final Result

The "Maintenance Date" label appears in the form after Profile selection, alongside Expiration Date.
