# Purpose

Scroll: Loaded count increases after multiple scroll-to-bottom actions

# Preconditions

${LIMAS_BASE_URL} is reachable. Valid credentials for SUPER_USER_ADMIN_USER. Pending requests total > loaded count.

# Test Steps

1. Action: Complete Keycloak login as SUPER_USER_ADMIN_USER.
Expected Result: Dashboard is displayed.

2. Action: Click Pending License Requests tab.
Expected Result: Pending requests table visible with initial loaded count.

3. Action: Scroll to bottom of table three times, waiting 2s between each.
Expected Result: Loaded count increases after at least one scroll action.

# Expected Final Result

Final loaded count > initial loaded count (when total > initial). Count display remains numeric and non-negative.
