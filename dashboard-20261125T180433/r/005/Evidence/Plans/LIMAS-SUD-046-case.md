# Purpose

To verify the functionality of "System User Dashboard" → "Sidebar Navigation" → "Navigation Links" → "Accessibility — Missing Accessible Names"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The sidebar dialog is open (after Ctrl+B).

# Test Steps

1. Action: Navigate to the dashboard, press Ctrl+B to open the sidebar dialog.
Expected Result: The sidebar dialog is visible with 11 navigation links (items 1–11 in the list).
2. Action: Inspect each of the 11 nav links for `aria-label` attribute.
Expected Result: None of the 11 links have an `aria-label` attribute.
3. Action: Inspect each of the 11 nav links for `title` attribute.
Expected Result: None of the 11 links have a `title` attribute.
4. Action: Inspect each of the 11 nav links for visible text content.
Expected Result: None of the 11 links have text content — they are icon-only (SV

# Expected Final Result

All 11 sidebar navigation links have no accessible name. The fallback test strategy uses `href` attribute matching or `nth-child` indexing to locate each link.
