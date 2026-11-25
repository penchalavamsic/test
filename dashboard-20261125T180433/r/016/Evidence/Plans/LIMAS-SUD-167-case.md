# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "History Switch" → "Checked state"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; Dashboard loaded.

# Test Steps

1. Navigate to dashboard, wait for full render. 2. Click the switch. 3. Assert aria-checked="true".

# Expected Final Result

The history switch has aria-checked="true" after clicking.
