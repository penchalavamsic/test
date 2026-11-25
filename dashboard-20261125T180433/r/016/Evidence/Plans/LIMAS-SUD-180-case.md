# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Processed View" → "Initial API request"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; Dashboard loaded.

# Test Steps

1. Navigate to dashboard, wait for full render. 2. Set up response watcher for GET **/request/processed**. 3. Enable history. 4. Assert status 200.

# Expected Final Result

The initial processed API request returns 200 with page=0&size=20.
