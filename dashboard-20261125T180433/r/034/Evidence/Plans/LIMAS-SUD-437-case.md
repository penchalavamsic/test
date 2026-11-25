# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Large Result Set" → "Total Count Is Stable After Reselecting Expiration"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Record the Expiration total.
4. Select Maintenance and then Expiration.
5. Restore the default filter state.

# Expected Final Result

The total count is stable after a filter round-trip.
