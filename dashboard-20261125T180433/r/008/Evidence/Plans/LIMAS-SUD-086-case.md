# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Search" → "Case sensitivity"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The Pending License Requests tab is selected and the list is loaded.; At least one user name in the list contains alphabetic characters with distinguishable case.

# Test Steps

1. Action: Capture the first visible user name from the table and extract a substring that contains at least one alphabetic character.
Expected Result: A non-empty substring with alphabetic characters is captured.
2. Action: Search using the substring in its original casing and capture the loaded count.
Expected Result: A positive loaded count is obtained.
3. Action: Clear the search field, then search using the same substring with case inverted (e.g., all lowercase).
Expected Result: The search field receives the inverted-case input.
4. Action: Observe the loaded count after the inverted-case

# Expected Final Result

The test documents whether the search is case-insensitive. If case-insensitive, both original and inverted casing produce the same loaded count. If case-sensitive, the inverted casing produces fewer or zero results.
