# Purpose

To verify the functionality of "System User Dashboard" → "Header" → "Account Control" → "Visibility"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Locate the account button via its accessible name (initials "as").
Expected Result: The account button with name "as" is visible and enabled.

# Expected Final Result

The account control (initials avatar button) is visible and enabled.
