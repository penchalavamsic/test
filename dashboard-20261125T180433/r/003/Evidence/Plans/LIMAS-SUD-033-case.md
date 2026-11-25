# Purpose

To verify the functionality of "System User Dashboard" → "Sidebar Navigation" → "Reports" → "Link Visibility & Route"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The sidebar dialog is open.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Press Ctrl+B to open the sidebar dialog.
Expected Result: The sidebar dialog is visible with the navigation list.
3. Action: Locate the nav link with `href="/reports"`.
Expected Result: The link is present and visible in the sidebar navigation list.
4. Action: Click the Reports link.
Expected Result: The browser navigates to `/reports`, the sidebar closes, and the destination page loads.
5. Action: Reopen the sidebar and confirm `aria-current` is now 

# Expected Final Result

The Reports link is visible in the sidebar, navigates to `/reports`, and the sidebar closes on navigation.
