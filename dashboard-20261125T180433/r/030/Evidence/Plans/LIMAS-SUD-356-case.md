# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Expires Before Field" → "Switching To Maintenance Retains Selected Date"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Enter TEST_FUTURE_DATE.
4. Select Maintenance.
5. Read the field value.
6. Restore the default filter state.

# Expected Final Result

The selected date is retained after switching to Maintenance.
