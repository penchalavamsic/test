# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Large Result Set" → "All Expiring Licenses Displayed Note Is Visible"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Read the text below the record list.
4. Restore the default filter state.

# Expected Final Result

The loading-complete note is visible.
