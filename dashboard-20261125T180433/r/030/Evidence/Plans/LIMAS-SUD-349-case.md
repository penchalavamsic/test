# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Expires Before Field" → "Partial Segment Entry Leaves Value Empty"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Focus the field and press ArrowUp once on the first segment.
4. Read the field value and validity.
5. Restore the default filter state.

# Expected Final Result

A partial date does not produce a value.
