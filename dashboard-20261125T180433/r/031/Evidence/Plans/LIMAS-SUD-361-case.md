# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "License List" → "Filter Result Updates Are Not In A Live Region"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Select Maintenance and wait for the list to refresh.
4. Check whether a rendered record is inside an aria-live region.
5. Restore the default filter state.

# Expected Final Result

License records are outside any live region.
