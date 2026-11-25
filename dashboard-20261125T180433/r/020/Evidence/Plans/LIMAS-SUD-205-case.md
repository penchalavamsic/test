# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Processed View" → "Search" → "List restoration"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.

# Test Steps

1. Authenticate, enable history. 2. Search, then clear. 3. Assert loaded count returns dynamically.

# Expected Final Result

After clearing search, loaded count returns to its previous dynamic value.
