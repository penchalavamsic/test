# Purpose

To verify the functionality of \"System User Dashboard\" → \"Expiring Licenses\" → \"Cancel Button\" → \"Cancel Button Closes The Dialog\"

# Preconditions

Dashboard is loaded as SUPER_USER_ADMIN_USER, Expiring Licenses card selected, Expiration selected, Expires before empty, Search empty.

# Test Steps

1. Navigate to the System User Dashboard and select Expiring Licenses.
2. Locate a record by its identifier and click its Extend button.
3. Click Cancel.
4. Verify Expiration is selected.
5. Verify Maintenance is unselected.
6. Verify Expires Before is empty.
7. Verify Search is empty.

# Expected Final Result

The Cancel button closes the dialog.
