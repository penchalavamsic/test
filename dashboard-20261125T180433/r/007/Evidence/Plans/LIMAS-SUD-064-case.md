# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Count Display" → "Counts are Non-Negative Numbers"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: The count display is visible.
2. Action: Extract the "loaded" number from the count display text.
Expected Result: The loaded value is a non-negative integer.
3. Action: Extract the "total pending" number from the count display text.
Expected Result: The total value is a non-negative integer.
4. Action: Compare loaded and total counts.
Expected Result: loaded ≤ total pending.

# Expected Final Result

Both count values are valid non-negative integers with loaded count not exceeding the total.
