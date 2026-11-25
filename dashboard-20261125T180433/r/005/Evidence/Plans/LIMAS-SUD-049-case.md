# Purpose

To verify the functionality of "System User Dashboard" → "Summary Cards" → "Card Content" → "Count Badge is Numeric and Visible"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: All 4 summary cards are visible.
2. Action: For each card, locate the count number displayed within the card.
Expected Result: A numeric text element is visible inside the card.
3. Action: Parse the text content as an integer.
Expected Result: The parsed value is a number ≥ 0.

# Expected Final Result

Every summary card displays a visible numeric count badge that is parseable as a non-negative integer.
