# Purpose

To verify the functionality of \"System User Dashboard\" → \"Expiring Licenses\" → \"User Licenses Navigation\" → \"Clicking Navigates To User And License Hub\"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Navigate to the System User Dashboard and select Expiring Licenses.
2. Click the User Licenses button.
3. Return to the System User Dashboard.
4. Click the Expiring Licenses summary card.
5. Verify Expiration is selected.
6. Verify Maintenance is unselected.
7. Verify Expires Before is empty.
8. Verify Search is empty.

# Expected Final Result

The browser navigates to /users-licenses after clicking User Licenses.
