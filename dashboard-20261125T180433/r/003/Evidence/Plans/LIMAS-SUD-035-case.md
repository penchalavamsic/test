# Purpose

To verify the functionality of "System User Dashboard" → "Sidebar Navigation" → "Standard License Configurations" → "Link Visibility & Route"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The sidebar dialog is open.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Press Ctrl+B to open the sidebar dialog.
Expected Result: The sidebar dialog is visible with the navigation list.
3. Action: Locate the nav link with `href="/standard-license-configurations"`.
Expected Result: The link is present and visible in the sidebar navigation list.
4. Action: Click the Standard License Configurations link.
Expected Result: The browser navigates to `/standard-license-configurations`, the sidebar closes, and the destination page

# Expected Final Result

The Standard License Configurations link is visible in the sidebar, navigates to `/standard-license-configurations`, and the sidebar closes on navigation.
