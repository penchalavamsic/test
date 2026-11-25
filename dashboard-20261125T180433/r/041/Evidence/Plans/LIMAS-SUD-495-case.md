# Purpose

To verify the functionality of \"System User Dashboard\" → \"Expiring Licenses\" → \"New Expiration Date Input\" → \"New Expiration Date Input Is Visible And Empty\"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Navigate to the System User Dashboard and select Expiring Licenses.
2. Locate a record by its identifier and click its Extend button.
3. Read the input type and value.
4. Close the dialog.
5. Verify Expiration is selected.
6. Verify Maintenance is unselected.
7. Verify Expires Before is empty.
8. Verify Search is empty.

# Expected Final Result

The New Expiration Date input is visible, type=date, and empty.
