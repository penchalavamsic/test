# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Search" → "Leading and trailing whitespace handling"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The Pending License Requests tab is selected and its list is loaded with at least one visible row.

# Test Steps

1. Action: Navigate to the dashboard, ensure the Pending License Requests tab is active, and confirm the list is loaded.
Expected Result: The count display shows a positive loaded count.
2. Action: Extract a search substring from the first visible row and perform a normal search to capture the loaded count.
Expected Result: A loaded count ≥ 1 is captured as `trimmedCount`.
3. Action: Clear the search field and enter the same substring but with leading and trailing spaces (e.g., "  searchterm  ").
Expected Result: The search field accepts the input.
4. Action: Observe the loaded count display.


# Expected Final Result

The behavior of leading/trailing whitespace is observed and documented — either results match the trimmed search (whitespace is stripped) or zero results are returned (whitespace is treated literally).
