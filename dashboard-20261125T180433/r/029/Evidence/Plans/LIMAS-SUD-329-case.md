# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Filter By Radios" → "Tab Moves Focus To Expires Before Field"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Focus the checked Expiration radio.
4. Press Tab.

# Expected Final Result

Expires before is the next tab stop after the radio group.
