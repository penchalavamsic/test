# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Processed View" → "Initial page size"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; Dashboard loaded.

# Test Steps

1. Navigate to dashboard, wait for full render. 2. Capture API response. 3. Assert size parameter is 20.

# Expected Final Result

The initial processed API request uses size=20.
