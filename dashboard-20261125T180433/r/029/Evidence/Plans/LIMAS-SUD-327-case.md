# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Filter By Radios" → "Arrow Left Moves Selection From Maintenance To Expiration"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Select Maintenance and focus its radio.
4. Press ArrowLeft.
5. Restore the default filter state.

# Expected Final Result

Expiration is selected through keyboard navigation.
