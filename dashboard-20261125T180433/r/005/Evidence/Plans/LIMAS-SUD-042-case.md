# Purpose

To verify the functionality of "System User Dashboard" → "Sidebar Navigation" → "Active State" → "Update After Round-Trip Navigation"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The sidebar dialog is open.

# Test Steps

1. Action: Navigate to the dashboard, open the sidebar with Ctrl+B.
Expected Result: System User Dashboard link has `aria-current="page"`.
2. Action: Click the User Licenses nav link.
Expected Result: Browser navigates to `/users-licenses`, sidebar closes.
3. Action: Press Ctrl+B to reopen the sidebar.
Expected Result: User Licenses link now has `aria-current="page"`. System User Dashboard link does not.
4. Action: Click the System User Dashboard nav link.
Expected Result: Browser navigates back to `/system-user-dashboard`, sidebar closes.
5. Action: Press Ctrl+B to reopen the sidebar.
Expecte

# Expected Final Result

The `aria-current="page"` attribute moves to the active route after each navigation, with only one link holding it at any time.
