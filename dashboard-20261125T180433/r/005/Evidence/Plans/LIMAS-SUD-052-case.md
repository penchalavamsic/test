# Purpose

To verify the functionality of "System User Dashboard" → "Summary Cards" → "Card Appearance" → "Distinct Color Schemes Per Card"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The theme is light mode (the initial state).

# Test Steps

1. Action: Navigate to the dashboard and wait for full render in light mode.
Expected Result: Theme is light mode.
2. Action: Locate each of the 4 summary cards by their accessible names.
Expected Result: All 4 cards are visible.
3. Action: Extract the computed background color or a distinguishing CSS class/token from each card.
Expected Result: The 4 cards have distinct background colors (no two cards share the same color).
4. Action: Verify the active/pressed card has a visually distinct appearance from the inactive cards.
Expected Result: The pressed card (Pending License Requests) has a di

# Expected Final Result

Each of the 4 summary cards has a distinct color scheme, with the active card visually differentiated.
