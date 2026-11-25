# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Processed View" → "Search" → "Partial match"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.

# Test Steps

1. Authenticate, enable history. 2. Type partial substring. 3. Verify contains matching.

# Expected Final Result

Partial substring matching works via contains logic.
