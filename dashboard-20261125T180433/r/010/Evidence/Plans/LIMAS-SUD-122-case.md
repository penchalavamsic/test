# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Search" → "Clear via Escape key"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The Pending License Requests tab is selected and the list is loaded.; A search has been performed that reduced the loaded count.

# Test Steps

1. Action: Capture the initial loaded count before any search.
Expected Result: The initial loaded count is a positive integer.
2. Action: Extract a search substring from the first visible row, type it into the search field, and confirm the search takes effect.
Expected Result: The search field contains the typed text and the loaded count may differ from initial.
3. Action: Focus the search field and press Escape.
Expected Result: The search field is cleared.
4. Action: Observe the count display after Escape.
Expected Result: The loaded count returns to the initial value, confirming the full l

# Expected Final Result

Pressing Escape while the search field is focused clears the field and restores the original loaded count.
