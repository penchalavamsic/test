# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Expiration Date Manual Keyboard Input"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; A User Group and Profile have been selected.; The Expiration Date field is visible and editable.

# Test Steps

1. Action: Select User Group and Profile to reveal the Expiration Date field.
Expected Result: Expiration Date* input field is visible.
2. Action: Focus the Expiration Date input and type a valid future date (e.g., one year from today) in the expected format.
Expected Result: The date is accepted — no validation error appears. The field value reflects the typed date.
3. Action: Verify Approve Request button state.
Expected Result: Approve Request is no longer blocked by the missing Expiration Date requirement.

# Expected Final Result

A valid future date typed manually is accepted by the Expiration Date field.
