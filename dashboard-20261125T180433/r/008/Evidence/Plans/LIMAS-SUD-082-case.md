# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Search" → "Search by user name"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The Pending License Requests tab is selected and has loaded its list with a count display visible.

# Test Steps

1. Action: Navigate to the dashboard and ensure the Pending License Requests tab is active and the list is loaded.
Expected Result: The count display contains the initial "loaded·total pending" text.
2. Action: Extract the initial total pending count from the count display text (the number after "total").
Expected Result: A positive integer is captured as `initialTotal`.
3. Action: Locate the first user name text visible in the Pending License Requests table body. Extract a substring (e.g., first 3–4 characters) to use as a search term.
Expected Result: A non-empty search substring is captured

# Expected Final Result

Typing a substring of a visible user name into the search field reduces the loaded count. The loaded count after searching is less than or equal to the initial loaded count.
