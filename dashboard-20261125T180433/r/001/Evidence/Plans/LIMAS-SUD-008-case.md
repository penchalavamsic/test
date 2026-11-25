# Purpose

To verify the functionality of \"System User Dashboard\" → \"Page Shell\" → \"Stability\" → \"Dashboard after refresh\

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Valid credentials for `SUPER_USER_ADMIN_USER` are configured.

# Test Steps

1. Action: Complete Keycloak login and land on the dashboard.
Expected Result: Dashboard page is loaded with heading, subtitle, and content visible.
2. Action: Refresh the browser page.
Expected Result: The page reloads.
3. Action: Verify the page shell after refresh.
Expected Result: The route is still `/system-user-dashboard`, the heading "System User Dashboard" is visible, and the subtitle text is present. No redirect to login occurs.

# Expected Final Result

The dashboard page shell remains intact after a page refresh.
