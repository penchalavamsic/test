# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Processed View" → "Search" → "Empty restores"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.

# Test Steps

1. Authenticate, enable history. 2. Type a search value. 3. Clear to empty. 4. Verify original records return.

# Expected Final Result

Clearing search to empty string restores the original loaded records.
