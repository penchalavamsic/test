# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Expires Before Field" → "Partial Entry Shows No Associated Validation Message"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Press ArrowUp once on the first date segment.
4. Inspect aria-invalid, aria-describedby and alert roles.
5. Restore the default filter state.

# Expected Final Result

No validation message is associated with the textbox.
