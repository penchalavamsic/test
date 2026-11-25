# Purpose

To verify the functionality of "System User Dashboard" → "Summary Cards" → "Pending License Requests Card" → "Count Syncs with Table"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; At least one pending license request exists.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard is fully rendered with summary cards visible.
2. Action: Extract the numeric count from the Pending License Requests card text.
Expected Result: The card contains a numeric count (e.g., "146 Pending").
3. Action: Click the Pending License Requests card to load the table and count the rows.
Expected Result: The table is visible with a certain number of data rows.
4. Action: Compare the card count to the number of visible table rows.
Expected Result: The card count equals the number of loaded table rows.

# Expected Final Result

The Pending count displayed on the summary card accurately reflects the number of license request rows loaded in the table.
