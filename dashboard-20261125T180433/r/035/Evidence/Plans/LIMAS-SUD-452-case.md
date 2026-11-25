# Purpose

To verify the functionality of \"System User Dashboard\" → \"Expiring Licenses\" → \"Expiration Date Value\" → \"Expiration Date Value Is Visible And Follows Day Month Year Format\"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Read the Expiration date.
4. Restore the default filter state.

# Expected Final Result

The Expiration date matches the dd Mon yyyy format.
