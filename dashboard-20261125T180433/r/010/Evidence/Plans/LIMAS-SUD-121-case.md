# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Search" → "Keyboard focus"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The Pending License Requests tab is selected.

# Test Steps

1. Action: Navigate to the dashboard, ensure the Pending License Requests tab is active, and confirm the search field is present.
Expected Result: The search field with placeholder "Search license requests..." is visible.
2. Action: Focus a known element before the search field (e.g., the Pending License Requests heading) and press Tab.
Expected Result: The search field receives focus (document.activeElement is the search input).

# Expected Final Result

After pressing Tab from a preceding focusable element, the search input field is focused.
