# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Search" → "Clear search restores original list"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The Pending License Requests tab is selected and the full list is loaded.; A search has been performed that reduced the loaded count.

# Test Steps

1. Action: Capture the initial loaded count before any search.
Expected Result: The initial loaded count is a positive integer.
2. Action: Extract a search substring from the first visible row and type it into the search field.
Expected Result: The loaded count changes (decreases or stays the same).
3. Action: Capture the loaded count after search.
Expected Result: A loaded count value is captured as `searchedLoaded`.
4. Action: Clear the search field (select all text and delete, or use the clear button if present).
Expected Result: The search field is empty.
5. Action: Observe the count displ

# Expected Final Result

After clearing the search field, the loaded count returns to the initial value, confirming the full list is restored.
