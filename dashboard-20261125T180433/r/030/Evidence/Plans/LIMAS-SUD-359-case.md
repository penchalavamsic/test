# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Maintenance Radio" → "Clearing Date In Maintenance Mode Keeps Maintenance Selected"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Select Maintenance and enter TEST_FUTURE_DATE.
4. Clear the field.
5. Read the radio states.
6. Restore the default filter state.

# Expected Final Result

Maintenance remains selected with an empty date.
