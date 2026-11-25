# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Processed View" → "Search" → "Loaded count update"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.

# Test Steps

1. Authenticate, enable history. 2. Record loaded count. 3. Type search. 4. Assert loaded count changes dynamically.

# Expected Final Result

The loaded count updates to reflect filtered results.
