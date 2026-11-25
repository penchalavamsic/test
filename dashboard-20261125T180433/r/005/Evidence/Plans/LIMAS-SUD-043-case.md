# Purpose

To verify the functionality of "System User Dashboard" → "Sidebar Navigation" → "Close Behavior" → "Escape Key"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The sidebar dialog is open (after Ctrl+B).

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Press Ctrl+B to open the sidebar dialog.
Expected Result: The sidebar dialog with `role="dialog"` is visible.
3. Action: Press Escape.
Expected Result: The sidebar dialog is no longer visible in the DOM or is hidden.
4. Action: Verify the dashboard remains intact.
Expected Result: The dashboard heading "System User Dashboard" is still visible and the page URL is still `/system-user-dashboard`.

# Expected Final Result

Pressing Escape closes the sidebar dialog without affecting the current route or page content.
