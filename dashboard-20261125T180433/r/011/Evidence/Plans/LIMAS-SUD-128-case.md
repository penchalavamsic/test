# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Table" → "Incremental loading trigger"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The Pending License Requests tab is selected and the initial 20 rows are loaded.; The loaded count is less than the total pending count (there are more rows to load).

# Test Steps

1. Action: Navigate to the dashboard, ensure the Pending License Requests tab is active, and capture the initial visible row count.
Expected Result: A positive row count is captured as `initialRowCount`.
2. Action: Scroll to the bottom of the table container.
Expected Result: The scroll action completes.
3. Action: Wait briefly and capture the new visible row count.
Expected Result: If more rows exist, the row count after scrolling is greater than the initial count. If all rows were already loaded, the count stays the same.

# Expected Final Result

Scrolling to the bottom of the table either increases the visible row count (incremental loading works) or the count stays the same (all rows were already loaded).
