# Purpose

To verify the functionality of \"System User Dashboard\" → \"Expiring Licenses\" → \"Company Field\" → \"Company Field Is Not Rendered On The Card\"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Read all visible text on the card.
4. Restore the default filter state.

# Expected Final Result

Company is not rendered on the record card.
