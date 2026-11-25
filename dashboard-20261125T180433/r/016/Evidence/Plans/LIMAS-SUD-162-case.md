# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "History Switch" → "Accessible name"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; Dashboard loaded.

# Test Steps

1. Navigate to dashboard, wait for full render. 2. Assert switch has accessible name and role.

# Expected Final Result

The history switch has accessible name "Show License Request History" and role="switch".
