# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Profile Search" → "Searching By Full Profile Shows Matching Records"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Read one loaded record at runtime to derive TEST_* search values (values are never stored).
4. Enter TEST_PROFILE (taken from a loaded record) into the Search field.
5. Compare the visible records with the loaded baseline.
6. Read the count text.
7. Restore the default filter state.

# Expected Final Result

Records matching the Profile value remain visible, the matches count equals the visible records and the total count is unchanged.
