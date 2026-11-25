# Purpose

To verify the functionality of "System User Dashboard" → "Summary Cards" → "Card Content" → "Lucide SVG Icon Present"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: All 4 summary cards are visible.
2. Action: For each summary card button, locate the nested `svg` element.
Expected Result: Each card contains exactly one `svg` element.
3. Action: Verify each `svg` is visible.
Expected Result: All 4 SVG icons are visible.

# Expected Final Result

Each summary card contains a visible Lucide SVG icon.
