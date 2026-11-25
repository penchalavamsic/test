# Purpose

To verify the functionality of \"System User Dashboard\" → \"Page Shell\" → \"Subtitle\" → \"Subtitle visibility and text\

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Valid credentials for `SUPER_USER_ADMIN_USER` are configured.

# Test Steps

1. Action: Complete Keycloak login and land on the dashboard.
Expected Result: Dashboard page is loaded.
2. Action: Inspect the paragraph below the dashboard heading.
Expected Result: A paragraph with text "Monitor pending requests, expiring licenses, and floating seat usage." is visible.

# Expected Final Result

The subtitle "Monitor pending requests, expiring licenses, and floating seat usage." is visible.
