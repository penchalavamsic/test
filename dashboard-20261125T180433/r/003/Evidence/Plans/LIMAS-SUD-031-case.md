# Purpose

To verify the functionality of "System User Dashboard" → "Sidebar Navigation" → "System User Dashboard" → "Link Visibility & aria-current"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The sidebar dialog is open.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Press Ctrl+B to open the sidebar dialog.
Expected Result: The sidebar dialog is visible.
3. Action: Locate the nav link with `href="/system-user-dashboard"`.
Expected Result: The link is present and visible in the sidebar navigation list.
4. Action: Verify the link has `aria-current="page"`.
Expected Result: `aria-current="page"` is set, confirming this is the current route.

# Expected Final Result

The System User Dashboard nav link is present with `href="/system-user-dashboard"` and `aria-current="page"`.
