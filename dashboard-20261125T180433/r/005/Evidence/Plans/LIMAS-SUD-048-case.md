# Purpose

To verify the functionality of "System User Dashboard" → "Summary Cards" → "Pending License Requests Card" → "Selected by Default"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard content is visible.
2. Action: Locate the "Pending License Requests" summary card button.
Expected Result: The card is found by its accessible name matching `/Pending License Requests/`.
3. Action: Assert the `aria-pressed` attribute of the card.
Expected Result: `aria-pressed` equals `"true"`.

# Expected Final Result

The "Pending License Requests" summary card is the initially selected card with `aria-pressed="true"`.
