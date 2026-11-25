# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Filter State" → "Default Filter State Is Restored After Changes"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Select Maintenance and enter TEST_FUTURE_DATE.
4. Clear the date and select Expiration.
5. Read all four controls.
6. Restore the default filter state.

# Expected Final Result

The default filter state is restored.
