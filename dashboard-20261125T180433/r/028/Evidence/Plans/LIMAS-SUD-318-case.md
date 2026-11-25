# Purpose

To verify the functionality of "System User Dashboard" → "Expiring Licenses" → "Maintenance Radio" → "Selecting Maintenance Requests A Page With Page Size"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Authenticate as SUPER_USER_ADMIN_USER and open the System User Dashboard.
2. Click the Expiring Licenses summary card and wait for the section to load.
3. Click the Maintenance radio while waiting for the license-list response.
4. Read the page and size query parameters.
5. Restore the default filter state.

# Expected Final Result

The Maintenance request carries numeric page and size parameters.
