# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Processed View" → "Search" → "Keyboard focus"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.

# Test Steps

1. Authenticate, enable history. 2. Tab to focus the search field. 3. Assert focused.

# Expected Final Result

The search field is keyboard-focusable via Tab.
