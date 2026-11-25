# Purpose

To verify the functionality of \"System User Dashboard\" → \"Page Shell\" → \"Content\" → \"Main content visibility\

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Valid credentials for `SUPER_USER_ADMIN_USER` are configured.

# Test Steps

1. Action: Complete Keycloak login and land on the dashboard.
Expected Result: Dashboard page is loaded.
2. Action: Inspect the main content area.
Expected Result: The `<main>` element is present in the DOM and contains visible child elements. The main's inner container uses the class `container mx-auto p-6 animate-in fade-in`.

# Expected Final Result

The main content container is present and visible.
