# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Processed View" → "Search" → "No duplicate"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.

# Test Steps

1. Authenticate, enable history. 2. Search, clear, search again. 3. Assert no duplicate records.

# Expected Final Result

No duplicate records appear after clearing and repeating a search.
