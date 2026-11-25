# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Cancel Button Always Enabled"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.

# Test Steps

1. Action: Open the inline approval form.
Expected Result: Form is visible.
2. Action: Verify the Cancel button is enabled.
Expected Result: Cancel button has no `disabled` attribute or `aria-disabled="true"` — it is interactive.
3. Action: After filling some fields, verify Cancel remains enabled.
Expected Result: Cancel button is still enabled regardless of form progress.

# Expected Final Result

The Cancel button is always enabled and clickable while the inline form is open.
