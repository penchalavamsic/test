# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Expires Before Field" → "Keyboard Segment Stepping Produces A Date"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Focus the Expires before field and press ArrowUp, Tab, ArrowUp, Tab, ArrowUp.
4. Read the field value.
5. Restore the default filter state.

# Expected Final Result

Keyboard-only date entry is supported by the native date control.
