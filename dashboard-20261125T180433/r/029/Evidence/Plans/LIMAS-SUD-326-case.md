# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "License Count" → "Reselecting Expiration Restores Initial Loaded Count"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Capture the initial loaded count at runtime.
4. Select Maintenance, then Expiration.
5. Read the loaded count.
6. Restore the default filter state.

# Expected Final Result

The loaded count matches the runtime baseline.
