# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Processed View" → "Search" → "Keyboard clear"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.

# Test Steps

1. Authenticate, enable history. 2. Type a value. 3. Clear via keyboard. 4. Assert field empty.

# Expected Final Result

Search field clears via keyboard (no visible clear button).
