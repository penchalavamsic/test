# Purpose

To verify the functionality of \"System User Dashboard\" → \"Expiring Licenses\" → \"Extend Dialog Initial Focus\" → \"Initial Focus Is On New Expiration Date Input\"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Navigate to the System User Dashboard and select Expiring Licenses.
2. Locate a record by its identifier and click its Extend button.
3. Open the dialog and read the active element.
4. Close the dialog.
5. Verify Expiration is selected.
6. Verify Maintenance is unselected.
7. Verify Expires Before is empty.
8. Verify Search is empty.

# Expected Final Result

Initial focus is on the New Expiration Date input.
