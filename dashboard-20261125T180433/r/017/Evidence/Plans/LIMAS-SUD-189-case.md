# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Processed View" → "Search" → "Accessible name"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.

# Test Steps

1. Authenticate, enable history, wait for load. 2. Assert accessible name and role.

# Expected Final Result

The search field has accessible name "Search license requests..." and role="textbox".
