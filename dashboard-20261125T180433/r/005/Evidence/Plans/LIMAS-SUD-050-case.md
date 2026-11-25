# Purpose

To verify the functionality of "System User Dashboard" → "Summary Cards" → "Card Content" → "Label Text Visible"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: All 4 summary cards are visible.
2. Action: Locate each card by its accessible name and verify it is visible.
Expected Result: Cards with names matching "Pending License Requests", "Expiring Licenses", "Floating Configs", and "Floating Licenses" are all visible.
3. Action: Verify each card contains non-empty text content beyond the count.
Expected Result: Each card has a visible label paragraph.

# Expected Final Result

Each of the 4 summary cards displays its label text visibly alongside its count badge.
