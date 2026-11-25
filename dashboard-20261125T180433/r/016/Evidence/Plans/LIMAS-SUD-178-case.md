# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Processed View" → "Feature column heading"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; Dashboard loaded.

# Test Steps

1. Navigate to dashboard, wait for full render. 2. Enable history. 3. Assert "Feature" heading is visible.

# Expected Final Result

The "Feature" column heading is visible in processed view.
