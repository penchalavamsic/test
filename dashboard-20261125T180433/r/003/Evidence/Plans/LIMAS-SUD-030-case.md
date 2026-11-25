# Purpose

To verify the functionality of "System User Dashboard" → "Sidebar Navigation" → "Active Indicator" → "aria-current on Current Page"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The sidebar dialog is open.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Press Ctrl+B to open the sidebar dialog.
Expected Result: The sidebar dialog is visible with the navigation list.
3. Action: Locate the nav link pointing to `/system-user-dashboard`.
Expected Result: The link has `href="/system-user-dashboard"`.
4. Action: Check the `aria-current` attribute on that link.
Expected Result: `aria-current="page"` is set on the System User Dashboard nav link.
5. Action: Confirm no other nav link has `aria-current`.
Expecte

# Expected Final Result

The System User Dashboard sidebar link is marked with `aria-current="page"` and is the only link with this attribute.
