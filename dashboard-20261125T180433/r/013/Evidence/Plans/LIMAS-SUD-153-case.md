# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Delete Button" → "Accessible Name Format"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; At least one pending license request exists in the table.

# Test Steps

1. Action: Navigate to the dashboard, wait for full render, and click the Pending License Requests card.
Expected Result: The license request table is visible with at least one row.
2. Action: Collect all visible Delete buttons and verify each has an accessible name.
Expected Result: Every Delete button has a non-empty accessible name.
3. Action: Verify each accessible name matches the pattern `Delete LR-\d+`.
Expected Result: Every Delete button's accessible name starts with "Delete LR-" followed by digits.

# Expected Final Result

All Delete buttons in the license request table have accessible names that follow the "Delete LR-XXXXX" naming convention.
