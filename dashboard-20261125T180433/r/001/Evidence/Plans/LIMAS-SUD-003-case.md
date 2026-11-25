# Purpose

To verify the functionality of \"System User Dashboard\" → \"Page Shell\" → \"Header\" → \"LIMAS logo visibility\

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Valid credentials for `SUPER_USER_ADMIN_USER` are configured.

# Test Steps

1. Action: Complete Keycloak login and land on the dashboard.
Expected Result: Dashboard page is loaded.
2. Action: Inspect the header/banner for the logo image.
Expected Result: An `img` element with name "Logo" is visible. The logo is rendered from `/LIMASdark.svg`.

# Expected Final Result

The LIMAS logo is visible in the dashboard header.
