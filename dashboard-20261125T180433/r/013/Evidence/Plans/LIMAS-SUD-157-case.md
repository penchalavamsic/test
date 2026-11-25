# Purpose

To verify the functionality of "System User Dashboard" → "Page Shell" → "URL" → "Stability During Interactions"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; At least one pending license request exists.

# Test Steps

1. Action: Navigate to the dashboard, wait for full render, and confirm the URL contains /system-user-dashboard.
Expected Result: URL is on /system-user-dashboard.
2. Action: Click the Pending License Requests card and verify the URL.
Expected Result: URL still contains /system-user-dashboard.
3. Action: Click the first Approve button to open the inline form and verify the URL.
Expected Result: URL still contains /system-user-dashboard.
4. Action: Click Cancel to close the form and verify the URL.
Expected Result: URL still contains /system-user-dashboard.
5. Action: Type into the search input

# Expected Final Result

The browser URL consistently stays on `/system-user-dashboard` for all in-page dashboard interactions — no route changes occur during card clicks, form open/close, or search filtering.
