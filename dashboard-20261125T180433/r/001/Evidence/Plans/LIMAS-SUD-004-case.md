# Purpose

To verify the functionality of \"System User Dashboard\" → \"Page Shell\" → \"Heading\" → \"Dashboard heading visibility\

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Valid credentials for `SUPER_USER_ADMIN_USER` are configured.

# Test Steps

1. Action: Complete Keycloak login and land on the dashboard.
Expected Result: Dashboard page is loaded.
2. Action: Inspect the main content heading.
Expected Result: An H1 element with text "System User Dashboard" is visible. The heading is accessible via `getByRole('heading', { name: 'System User Dashboard', level: 1 })`.

# Expected Final Result

The "System User Dashboard" level-1 heading is visible.
