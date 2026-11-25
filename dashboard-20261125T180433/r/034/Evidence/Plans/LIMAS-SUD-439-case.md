# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Large Result Set Accessibility" → "Record List Is Not In A Live Region"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Select Maintenance and then Expiration.
4. Check the record container for aria-live ancestry.
5. Restore the default filter state.

# Expected Final Result

Record list changes after a filter round-trip are not announced.
