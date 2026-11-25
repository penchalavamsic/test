# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Search" → "Clear via backspace"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The Pending License Requests tab is selected and the list is loaded.; A search has been performed.

# Test Steps

1. Action: Capture the initial loaded count before any search.
Expected Result: The initial loaded count is a positive integer.
2. Action: Extract a search substring from the first visible row and type it into the search field.
Expected Result: The search field contains the typed text.
3. Action: Delete all characters from the search field by pressing Backspace for each character.
Expected Result: The search field becomes empty.
4. Action: Observe the count display after clearing via backspace.
Expected Result: The loaded count returns to the initial value, confirming the full list is restored

# Expected Final Result

Deleting all characters from the search field with backspace restores the original loaded count.
