# Purpose

To verify the functionality of \"System User Dashboard\" → \"Expiring Licenses\" → \"User Licenses Navigation\" → \"Browser Back Returns To System User Dashboard\"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Navigate to the System User Dashboard and select Expiring Licenses.
2. Navigate to User Licenses, then press Back.
3. Click the Expiring Licenses summary card.
4. Verify Expiration is selected.
5. Verify Maintenance is unselected.
6. Verify Expires Before is empty.
7. Verify Search is empty.

# Expected Final Result

Browser back returns to the System User Dashboard.
