# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Expiration Radio" → "Selecting Future Date Keeps Expiration Selected"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Enter TEST_FUTURE_DATE.
4. Read the radio states.
5. Restore the default filter state.

# Expected Final Result

Expiration remains selected after a date is chosen.
