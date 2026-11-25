# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Search" → "Empty search submission"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The Pending License Requests tab is selected and the list is loaded.

# Test Steps

1. Action: Navigate to the dashboard, ensure the Pending License Requests tab is active, and capture the initial loaded count.
Expected Result: The count display shows a positive loaded count.
2. Action: Ensure the search field is empty, focus it, and press Enter.
Expected Result: The search field remains empty.
3. Action: Observe the loaded count display after pressing Enter.
Expected Result: The loaded count is unchanged — it matches the initial loaded count. No error or unexpected behavior occurs.

# Expected Final Result

Pressing Enter with an empty search field has no effect — the loaded count remains unchanged and no errors occur.
