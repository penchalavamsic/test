# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Search Count Text" → "Matches And Total Counts Are Numeric And Non-Negative"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Read one loaded record at runtime to derive TEST_* search values (values are never stored).
4. Enter TEST_USER_EMAIL into the Search field.
5. Read both numbers from the count text.
6. Restore the default filter state.

# Expected Final Result

Both counts are numeric and zero or greater.
