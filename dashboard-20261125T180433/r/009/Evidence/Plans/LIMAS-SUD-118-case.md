# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Search" → "Search by feature name"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The Pending License Requests tab is selected and its list is loaded with at least one visible row containing a feature name in the Feature column.

# Test Steps

1. Action: Navigate to the dashboard, ensure the Pending License Requests tab is active, and confirm the list is loaded.
Expected Result: The count display shows a positive loaded count and the table has visible data rows.
2. Action: Locate the feature name paragraph in the second cell of the first visible data row.
Expected Result: A non-empty feature name string is captured from the table.
3. Action: Extract a substring (first 3–5 characters) and type it into the search field.
Expected Result: The search field receives the input.
4. Action: Observe the loaded count display.
Expected Result: 

# Expected Final Result

Typing a feature name substring from a visible row into the search field produces at least one matching result and the count display reflects the filtered state.
