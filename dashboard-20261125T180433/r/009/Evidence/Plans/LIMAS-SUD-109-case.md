# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Cancel Button Always Visible"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.

# Test Steps

1. Action: Open the inline approval form.
Expected Result: Form is visible with "License Assignment" heading.
2. Action: Locate the Cancel button within the form.
Expected Result: A button labeled "Cancel" is visible.
3. Action: Fill some fields (e.g., select User Group) and verify Cancel remains visible.
Expected Result: Cancel button is still visible after partial form fill.

# Expected Final Result

The Cancel button is visible in the inline form at all times — before and after filling any fields.
