# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Search" → "Partial user name search"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The Pending License Requests tab is selected and its list is loaded with at least one visible row.

# Test Steps

1. Action: Navigate to the dashboard, ensure the Pending License Requests tab is active, and confirm the list is loaded.
Expected Result: The count display shows a positive loaded count and the table has visible data rows.
2. Action: Capture the first visible user name and extract a single alphabetic character from it.
Expected Result: A single character is extracted from the user name.
3. Action: Type that single character into the search field.
Expected Result: The search field receives the input.
4. Action: Observe the loaded count display.
Expected Result: The loaded count is ≥ 1 (since th

# Expected Final Result

Typing a single character from a visible user name returns at least one result, confirming partial substring search behavior.
