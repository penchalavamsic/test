# Purpose

To verify the functionality of \"System User Dashboard\" → \"Expiring Licenses\" → \"Maintenance Date Label\" → \"Maintenance Label Is Visible\"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Locate the Maint: label.
4. Restore the default filter state.

# Expected Final Result

The Maintenance label is visible.
