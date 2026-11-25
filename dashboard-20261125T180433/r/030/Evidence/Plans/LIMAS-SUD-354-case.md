# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Expires Before Field" → "Invalid Day Text Is Not Accepted"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Capture the loaded count at runtime.
4. Attempt to enter TEST_INVALID_DAY_DATE.
5. Read the loaded count.
6. Restore the default filter state.

# Expected Final Result

The field stays empty and the list is unchanged.
