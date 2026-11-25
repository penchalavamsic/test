# Purpose

To verify the functionality of "System User Dashboard" → "Header" → "Language Control" → "Accessible Name"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Inspect the language control button for aria-label and title attributes.
Expected Result: Neither aria-label nor title attribute is set.
3. Action: Confirm the control is still locatable via its nth-child position inside the header.
Expected Result: The button is findable via `locator('header button').first()`.

# Expected Final Result

The language control has no accessible name. The observed fallback selector is `locator('header button').first()` (globe icon).
