# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Search" → "Count display updates after search"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The Pending License Requests tab is selected and the count display is visible with initial values.

# Test Steps

1. Action: Capture the initial count display text before any search.
Expected Result: The text matches the pattern "N loaded·M total pending" where N and M are positive integers.
2. Action: Extract a search substring from the first visible user name in the table.
Expected Result: A non-empty substring is captured.
3. Action: Type the substring into the search field.
Expected Result: The count display updates — the loaded count decreases or stays the same, and the total count remains stable.
4. Action: Verify that the count display format is preserved after search ("N loaded·M total pending").


# Expected Final Result

After searching, the count display updates to reflect the filtered set: loaded count ≤ initial loaded count, total count remains unchanged, and the format "N loaded·M total pending" is preserved.
