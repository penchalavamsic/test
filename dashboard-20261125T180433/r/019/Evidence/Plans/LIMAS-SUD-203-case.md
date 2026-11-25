# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Processed View" → "Search" → "No-match state"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.

# Test Steps

1. Authenticate, enable history. 2. Type no-match value. 3. Assert "0 loaded" + message + hint.

# Expected Final Result

No-match state shows "0 loaded", message, and scroll hint.
