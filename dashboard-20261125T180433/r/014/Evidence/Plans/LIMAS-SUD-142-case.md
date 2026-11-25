# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Maintenance Date Enabled After Expiration Date Selection"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; A User Group and Profile have been selected.; Both Expiration Date and Maintenance Date fields are visible.; No Expiration Date has been selected yet.

# Test Steps

1. Action: With no Expiration Date selected, inspect the Maintenance Date field.
Expected Result: The Maintenance Date field is disabled or not editable.
2. Action: Select an Expiration Date (via manual input or calendar picker).
Expected Result: The Expiration Date field has a value.
3. Action: Inspect the Maintenance Date field again.
Expected Result: The Maintenance Date field is now enabled and editable.

# Expected Final Result

Maintenance Date becomes editable only after an Expiration Date has been selected.
