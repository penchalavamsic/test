# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Search" → "Search by request ID"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The Pending License Requests tab is selected and its list is loaded with at least one visible row containing a Delete button labeled "Delete LR-XXXXX".

# Test Steps

1. Action: Navigate to the dashboard, ensure the Pending License Requests tab is active, and confirm the list is loaded.
Expected Result: The count display shows a positive loaded count and the table has visible data rows.
2. Action: Locate the first visible Delete button in the table and capture its text.
Expected Result: A button with label matching the pattern "Delete LR-XXXXX" is visible and its text is captured.
3. Action: Extract the request ID portion (the "LR-XXXXX" part) and type it into the search field.
Expected Result: The search field receives the request ID input.
4. Action: Obse

# Expected Final Result

Typing a request ID substring from a visible row into the search field produces at least one matching result and the count display reflects the filtered state.
