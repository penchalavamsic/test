# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "History Switch" → "Keyboard operability"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; Dashboard loaded.

# Test Steps

1. Navigate to dashboard, wait for full render. 2. Focus the switch. 3. Press Space. 4. Assert aria-checked toggled.

# Expected Final Result

The history switch toggles via Space key.
