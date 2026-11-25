# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Expiration Date* Label Visibility"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; A User Group and Profile have been selected.

# Test Steps

1. Action: Open the form and verify Expiration Date label is not present before Profile selection.
Expected Result: No "Expiration Date*" label visible.
2. Action: Select a User Group, then select a Profile.
Expected Result: The "Expiration Date*" label appears with its associated date input.
3. Action: Verify the label text reads "Expiration Date" with a trailing asterisk.
Expected Result: "Expiration Date*" label is visible.

# Expected Final Result

The "Expiration Date*" label appears conditionally after Profile selection.
