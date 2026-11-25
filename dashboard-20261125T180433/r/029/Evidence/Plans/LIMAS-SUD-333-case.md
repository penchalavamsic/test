# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Expires Before Field" → "Selected Future Date Appears In Field In Live Format"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Generate TEST_FUTURE_DATE at runtime and enter it in the Expires before field.
4. Read the field value.
5. Restore the default filter state.

# Expected Final Result

The selected date appears in the field in the live format.
