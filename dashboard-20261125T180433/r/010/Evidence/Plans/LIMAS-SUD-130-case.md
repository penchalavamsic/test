# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Table" → "Loaded count after incremental load"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The Pending License Requests tab is selected and the initial rows are loaded.; The loaded count is less than the total pending count.

# Test Steps

1. Action: Navigate to the dashboard, ensure the Pending License Requests tab is active, and capture the initial loaded count.
Expected Result: A positive integer `initialLoaded` is captured.
2. Action: Scroll to the bottom of the table and wait for incremental loading.
Expected Result: The scroll action completes.
3. Action: Capture the updated loaded count from the count display.
Expected Result: If more rows exist to load, `updatedLoaded` ≥ `initialLoaded`. If all rows were already loaded, the counts remain equal.

# Expected Final Result

After scrolling, the loaded count is at least the initial loaded count, confirming the count display reflects the incremental loading state.
