# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Search" → "Special character handling"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The Pending License Requests tab is selected and its list is loaded.

# Test Steps

1. Action: Navigate to the dashboard, ensure the Pending License Requests tab is active, and confirm the search field is visible.
Expected Result: The search field with placeholder "Search license requests..." is visible.
2. Action: Type a string of special characters into the search field.
Expected Result: The search field accepts the input without errors and remains visible.
3. Action: Observe the count display and the table.
Expected Result: The page does not crash; the count display is still present; the table either shows zero results or filters accordingly.
4. Action: Clear the search fi

# Expected Final Result

Entering special characters into the search field does not cause a page crash, JavaScript error, or UI breakdown. The search still functions and can be cleared.
