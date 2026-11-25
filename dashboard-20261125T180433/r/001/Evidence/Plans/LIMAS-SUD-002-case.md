# Purpose

To verify the functionality of \"System User Dashboard\" → \"Page Shell\" → \"Title\" → \"Browser page title\

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Valid credentials for `SUPER_USER_ADMIN_USER` are configured.

# Test Steps

1. Action: Complete Keycloak login and land on the dashboard.
Expected Result: Dashboard page is loaded.
2. Action: Read the browser page title.
Expected Result: `document.title` equals "LIMAS".

# Expected Final Result

The browser page title is "LIMAS".
