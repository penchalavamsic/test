# Purpose

To verify the functionality of \"System User Dashboard\" → \"Page Shell\" → \"Contentinfo\" → \"Footer visibility\

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Valid credentials for `SUPER_USER_ADMIN_USER` are configured.

# Test Steps

1. Action: Complete Keycloak login and land on the dashboard.
Expected Result: Dashboard page is loaded.
2. Action: Inspect the footer area.
Expected Result: A `<contentinfo>` element (or `<footer>`) containing the text "© KPIT Technologies Ltd. All rights reserved." is visible.

# Expected Final Result

The KPIT copyright footer is visible on the dashboard.
