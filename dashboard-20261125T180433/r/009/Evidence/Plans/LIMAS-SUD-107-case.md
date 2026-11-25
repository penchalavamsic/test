# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Expiration Date Required Asterisk Visible"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; A User Group and Profile have been selected (Expiration Date label is visible).

# Test Steps

1. Action: Open form, select User Group, select Profile to reveal Expiration Date.
Expected Result: "Expiration Date*" label is visible.
2. Action: Inspect the label text.
Expected Result: The text reads "Expiration Date" with a trailing `*` indicating required.

# Expected Final Result

The Expiration Date label includes a visible `*` indicating the field is required.
