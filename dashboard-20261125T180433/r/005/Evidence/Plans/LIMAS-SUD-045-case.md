# Purpose

To verify the functionality of "System User Dashboard" → "Sidebar Navigation" → "Route Stability" → "Route Preservation After Open/Close"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible. URL contains `/system-user-dashboard`.
2. Action: Press Ctrl+B to open the sidebar dialog.
Expected Result: The sidebar dialog is visible.
3. Action: Press Escape to close the sidebar dialog.
Expected Result: The sidebar dialog is no longer visible.
4. Action: Verify the page URL and dashboard heading.
Expected Result: The URL still contains `/system-user-dashboard` and the "System User Dashboard" heading is still visible.
5. Action: Press Ctrl+B to open the sid

# Expected Final Result

Opening and closing the sidebar does not trigger any route change; the current page and its content remain stable.
