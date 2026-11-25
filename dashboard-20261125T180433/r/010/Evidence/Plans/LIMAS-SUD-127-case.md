# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Search" → "API behavior"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The Pending License Requests tab is selected and its list is loaded.

# Test Steps

1. Action: Navigate to the dashboard, ensure the Pending License Requests tab is active, and wait for all initial network activity to settle.
Expected Result: The list is fully loaded with no pending network requests.
2. Action: Set up a network request listener and type a search substring into the search field.
Expected Result: The search field receives the input.
3. Action: Wait briefly and check whether any new XHR or fetch requests were triggered by the search action.
Expected Result: No new network requests (or a specific request is documented if one occurs). The loaded count updates with

# Expected Final Result

Typing in the search field updates the loaded count without triggering a new network request, confirming client-side filtering.
