# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Search" → "Search by hardware ID"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The Pending License Requests tab is selected and its list is loaded with at least one visible row containing a hardware ID (quoted numeric).

# Test Steps

1. Action: Navigate to the dashboard, ensure the Pending License Requests tab is active, and confirm the list is loaded.
Expected Result: The count display shows a positive loaded count and the table has visible data rows.
2. Action: Locate the hardware ID paragraph (containing a quoted number pattern `"\d+"`) in the first visible data row.
Expected Result: A non-empty hardware ID string is captured from the table.
3. Action: Extract the numeric portion from inside the quotes and type it into the search field.
Expected Result: The search field receives the input.
4. Action: Observe the loaded 

# Expected Final Result

Typing a hardware ID substring from a visible row into the search field produces at least one matching result and the count display reflects the filtered state.
