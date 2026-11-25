# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "History Switch" → "Initial unchecked state"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; Dashboard loaded.

# Test Steps

1. Navigate to dashboard, wait for full render. 2. Assert aria-checked="false".

# Expected Final Result

The history switch is initially unchecked (aria-checked="false").
