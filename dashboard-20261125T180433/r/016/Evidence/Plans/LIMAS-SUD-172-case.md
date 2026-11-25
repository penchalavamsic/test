# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Processed View" → "Loaded count visibility"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; Dashboard loaded.

# Test Steps

1. Navigate to dashboard, wait for full render. 2. Enable history. 3. Assert count text "{N} loaded·{M} total processed" is visible.

# Expected Final Result

The loaded-record count text is visible.
