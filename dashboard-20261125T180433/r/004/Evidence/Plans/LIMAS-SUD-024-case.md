# Purpose

To verify the functionality of "System User Dashboard" → "Header" → "Account Control" → "Account Text Visibility"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Locate the account button and verify it contains non-empty text.
Expected Result: The account button text is not empty and contains an email-like value.

# Expected Final Result

The account control displays visible, non-empty account text.
