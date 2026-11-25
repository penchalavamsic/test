# Purpose

To verify the functionality of \"System User Dashboard\" → \"Expiring Licenses\" → \"Hardware ID Field\" → \"Hardware ID Is Visible And Non-Empty\"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Read the Hardware ID from the card.
4. Restore the default filter state.

# Expected Final Result

The Hardware ID is visible and non-empty.
