# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Search Field" → "Placeholder Text"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: The Pending License Requests section is visible.
2. Action: Locate the search textbox by its placeholder attribute.
Expected Result: The textbox is found and has placeholder "Search license requests...".

# Expected Final Result

The search textbox displays the placeholder "Search license requests...".
