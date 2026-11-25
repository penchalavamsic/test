# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Filter By Radios" → "Switching Filter Modes Keeps Session Authenticated"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Select Maintenance, then select Expiration.
4. Check the route and page heading.
5. Restore the default filter state.

# Expected Final Result

The authenticated dashboard remains displayed after switching filter modes.
