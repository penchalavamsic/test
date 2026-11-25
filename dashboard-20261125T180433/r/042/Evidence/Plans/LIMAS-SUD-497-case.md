# Purpose

To verify the functionality of \"System User Dashboard\" → \"Expiring Licenses\" → \"Expiration Extend by Days Input\" → \"Expiration Extend By Days Input Is Visible And Empty\"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Navigate to the System User Dashboard and select Expiring Licenses.
2. Locate a record by its identifier and click its Extend button.
3. Read the input type, placeholder, and value.
4. Close the dialog.
5. Verify Expiration is selected.
6. Verify Maintenance is unselected.
7. Verify Expires Before is empty.
8. Verify Search is empty.

# Expected Final Result

The Expiration Extend by Days input is visible, type=number, with placeholder, and empty.
