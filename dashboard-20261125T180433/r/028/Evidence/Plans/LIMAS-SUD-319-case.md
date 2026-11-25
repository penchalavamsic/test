# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Maintenance Radio" → "Selecting Maintenance Moves Date Filter To Maintenance Parameter"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Click the Maintenance radio while waiting for the license-list response.
4. Inspect which date parameters are populated.
5. Restore the default filter state.

# Expected Final Result

The meaning of the date filter switches from expiration date to maintenance date in the request.
