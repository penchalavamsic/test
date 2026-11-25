# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "History Switch" → "Keyboard focus"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; Dashboard loaded.

# Test Steps

1. Navigate to dashboard, wait for full render. 2. Focus the switch via keyboard Tab. 3. Assert it is focused.

# Expected Final Result

The history switch is keyboard-focusable.
