# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Processed View" → "Search" → "Case-insensitive"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.

# Test Steps

1. Authenticate, enable history. 2. Type uppercase variant. 3. Verify same results as lowercase.

# Expected Final Result

Search is case-insensitive — uppercase produces same results.
