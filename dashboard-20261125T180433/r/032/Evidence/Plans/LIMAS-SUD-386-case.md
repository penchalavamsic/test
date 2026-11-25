# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Company Partial Search" → "Partial Company Keeps The Owning Record"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Read one loaded record at runtime to derive TEST_* search values (values are never stored).
4. Read a Company value for a loaded record from the Expiration list response.
5. Enter a fragment of TEST_COMPANY into the Search field.
6. Restore the default filter state.

# Expected Final Result

The record owning the Company fragment remains visible.
