# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "License List" → "Clearing Date Leaves No Duplicate Records"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Capture the initial loaded and total counts at runtime.
4. Enter TEST_FUTURE_DATE, then clear the field with an empty fill.
5. Count rendered Extend buttons.
6. Restore the default filter state.

# Expected Final Result

Rendered records equal the baseline loaded count after clearing.
