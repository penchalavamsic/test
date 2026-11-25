# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Search Accessibility" → "Search Field Is Named Only By Its Placeholder"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Read one loaded record at runtime to derive TEST_* search values (values are never stored).
4. Inspect the Search field attributes.
5. Restore the default filter state.

# Expected Final Result

The accessible name depends on the placeholder only.
