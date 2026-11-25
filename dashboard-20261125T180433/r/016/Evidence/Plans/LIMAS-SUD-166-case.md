# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "History Switch" → "Click activation"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; Dashboard loaded.

# Test Steps

1. Navigate to dashboard, wait for full render. 2. Verify initial unchecked state. 3. Click the switch. 4. Verify checked state.

# Expected Final Result

The history switch toggles from unchecked to checked on click.
