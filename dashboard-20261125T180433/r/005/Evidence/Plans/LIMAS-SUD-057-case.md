# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Search Field" → "Search Field Visible"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: The Pending License Requests section is visible.
2. Action: Locate the search input by its placeholder text "Search license requests...".
Expected Result: The textbox is found and visible.

# Expected Final Result

The search field with placeholder "Search license requests..." is visible.
