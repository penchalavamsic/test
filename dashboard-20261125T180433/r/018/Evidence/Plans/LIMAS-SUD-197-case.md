# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Processed View" → "Search" → "Whitespace trimming"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.

# Test Steps

1. Authenticate, enable history. 2. Type with leading whitespace. 3. Assert whitespace trimmed.

# Expected Final Result

Leading whitespace is trimmed by the input control.
