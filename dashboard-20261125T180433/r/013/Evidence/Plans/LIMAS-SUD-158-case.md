# Purpose

To verify the functionality of "System User Dashboard" → "Browser Navigation" → "Back Button" → "Correct Navigation Behavior"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The dashboard is the second page in browser history (the login flow provides the first entry).

# Test Steps

1. Action: Navigate to the dashboard, wait for full render, and confirm the heading is visible.
Expected Result: "System User Dashboard" heading is visible.
2. Action: Use page.goBack() to simulate the browser back button.
Expected Result: The URL changes — the page navigated away from /system-user-dashboard.
3. Action: Use page.goForward() to simulate the browser forward button.
Expected Result: The page returns to /system-user-dashboard and the heading is visible again.

# Expected Final Result

The browser back button navigates away from the dashboard, and the forward button returns to it successfully. This is a read-only verification of browser history behavior.
