# Purpose

To verify the functionality of "System User Dashboard" → "Summary Cards" → "Card Container" → "All 4 Summary Cards Rendered"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard content is visible.
2. Action: Locate all summary card buttons within the main content area.
Expected Result: Exactly 4 buttons are found, each with `role="button"`.
3. Action: Verify that each of the 4 cards has an `aria-pressed` attribute.
Expected Result: All 4 cards have `aria-pressed` set to either `"true"` or `"false"`.

# Expected Final Result

Exactly 4 summary cards are rendered as buttons with `aria-pressed` attributes, forming the radio-group card selector.
