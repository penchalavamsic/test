# Purpose

To verify the functionality of "System User Dashboard" → "Sidebar Navigation" → "User Licenses" → "Link Visibility & Route"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The sidebar dialog is open.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Press Ctrl+B to open the sidebar dialog.
Expected Result: The sidebar dialog is visible with the navigation list.
3. Action: Locate the nav link with `href="/users-licenses"`.
Expected Result: The link is present and visible in the sidebar navigation list.
4. Action: Click the User Licenses link.
Expected Result: The browser navigates to `/users-licenses`, the sidebar closes, and the destination page loads.
5. Action: Reopen the sidebar and confirm `a

# Expected Final Result

The User Licenses link is visible in the sidebar, navigates to `/users-licenses`, and the sidebar closes on navigation.
