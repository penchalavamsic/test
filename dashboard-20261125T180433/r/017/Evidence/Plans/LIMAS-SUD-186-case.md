# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "History Switch" → "Keyboard accessibility"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; Dashboard loaded.

# Test Steps

1. Navigate to dashboard, wait for full render. 2. Assert role="switch". 3. Assert switch is keyboard focusable.

# Expected Final Result

The history switch has role="switch" and is keyboard focusable.
