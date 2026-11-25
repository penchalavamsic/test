# Purpose

To verify the functionality of "System User Dashboard" → "Summary Cards" → "Selection Behavior" → "Exclusive Selection (Radio-Group)"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard is loaded with the Pending License Requests card pressed.
2. Action: Count how many summary cards have `aria-pressed="true"`.
Expected Result: Exactly 1 card has `aria-pressed="true"`.
3. Action: Click the "Expiring Licenses" summary card.
Expected Result: The Expiring Licenses card now has `aria-pressed="true"`.
4. Action: Count how many cards have `aria-pressed="true"` after the click.
Expected Result: Still exactly 1 card has `aria-pressed="true"`.
5. Action: Verify the previously pressed card now has 

# Expected Final Result

Summary cards operate as an exclusive radio-group: exactly one card is pressed at any time, and clicking a different card transfers the pressed state exclusively.
