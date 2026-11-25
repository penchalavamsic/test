# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Approve Request Button Initially Disabled"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open with no fields filled.

# Test Steps

1. Action: Open the inline approval form.
Expected Result: Form is visible with all fields in their default empty state.
2. Action: Inspect the "Approve Request" button state.
Expected Result: The button is disabled — it has a `disabled` attribute or `aria-disabled="true"`.

# Expected Final Result

The "Approve Request" button is disabled when no required fields are filled.
