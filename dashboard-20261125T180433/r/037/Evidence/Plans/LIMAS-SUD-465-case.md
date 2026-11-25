# Purpose

To verify the functionality of \"System User Dashboard\" → \"Expiring Licenses\" → \"Record Card Accessibility\" → \"User Name And Email Are Not Semantically Distinct\"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Inspect the name and email elements.
4. Restore the default filter state.

# Expected Final Result

User name and email are not programmatically distinct.
