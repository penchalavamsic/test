# Purpose

Search: Negative — Nonexistent User returns zero results

# Preconditions

${LIMAS_BASE_URL} is reachable. Valid credentials for SUPER_USER_ADMIN_USER.

# Test Steps

1. Action: Complete Keycloak login as SUPER_USER_ADMIN_USER.
Expected Result: Dashboard is displayed.

2. Action: Click Pending License Requests tab.
Expected Result: Pending requests table visible with loaded count > 0.

3. Action: Enter a nonexistent username into search.
Expected Result: Loaded count drops to 0.

# Expected Final Result

Loaded count is 0. Search field retains the invalid input.
