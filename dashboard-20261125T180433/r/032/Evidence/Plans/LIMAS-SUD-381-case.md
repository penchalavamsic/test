# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "User Name Partial Search" → "Partial User Name From Middle Of Value Matches"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Read one loaded record at runtime to derive TEST_* search values (values are never stored).
4. Derive a short fragment of the User Name of a loaded record at runtime and enter it into the Search field.
5. Compare the visible records with the loaded baseline.
6. Restore the default filter state.

# Expected Final Result

Records containing the User Name fragment remain visible and the matches count equals the visible records.
