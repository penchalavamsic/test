# Purpose

To verify the functionality of \"System User Dashboard\" → \"Page Shell\" → \"Loading\" → \"Dashboard loading completion\

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Valid credentials for `SUPER_USER_ADMIN_USER` are configured.

# Test Steps

1. Action: Complete Keycloak login and land on the dashboard.
Expected Result: The page initially shows a "Loading..." indicator.
2. Action: Wait for the dashboard to finish loading.
Expected Result: The loading indicator is replaced by the rendered dashboard content. The heading "System User Dashboard" and the summary cards (Pending License Requests, Expiring Licenses, etc.) become visible.

# Expected Final Result

The dashboard completes loading and renders all page-shell content.
