# Purpose

To verify the functionality of \"System User Dashboard\" → \"Expiring Licenses\" → \"Record Card Theme\" → \"Card Text Remains Readable In Dark Mode\"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Toggle dark mode and read the card text colour.
4. Restore the default filter state.

# Expected Final Result

Card text switches colour for dark mode.
