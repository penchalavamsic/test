# Purpose

To verify the functionality of "System User Dashboard" → "Sidebar Navigation" → "Server License Import" → "Link Visibility & Route"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The sidebar dialog is open.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Press Ctrl+B to open the sidebar dialog.
Expected Result: The sidebar dialog is visible with the navigation list.
3. Action: Locate the nav link with `href="/server-license-import"`.
Expected Result: The link is present and visible in the sidebar navigation list.
4. Action: Click the Server License Import link.
Expected Result: The browser navigates to `/server-license-import`, the sidebar closes, and the destination page loads.
5. Action: Reopen the 

# Expected Final Result

The Server License Import link is visible in the sidebar, navigates to `/server-license-import`, and the sidebar closes on navigation.
