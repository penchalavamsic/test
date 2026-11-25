# Purpose

To verify the functionality of \"System User Dashboard\" → \"Expiring Licenses\" → \"User Licenses Navigation\" → \"Expiring Licenses State Is Restored After Navigation Round-trip\"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Navigate to the System User Dashboard and select Expiring Licenses.
2. Navigate to User Licenses.
3. Go back to the dashboard.
4. Click Expiring Licenses.
5. Verify the default filter state.

# Expected Final Result

Expiring Licenses can be selected and the default filter state is restored after a navigation round-trip.
