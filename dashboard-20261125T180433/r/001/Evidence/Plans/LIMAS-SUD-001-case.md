# Purpose

To verify the functionality of \"System User Dashboard\" → \"Page Shell\" → \"Route\" → \"/system-user-dashboard\

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Valid credentials for `SUPER_USER_ADMIN_USER` are configured.

# Test Steps

1. Action: Complete Keycloak login as SUPER_USER_ADMIN_USER.
Expected Result: Browser navigates through the OAuth callback.
2. Action: Observe the final URL after redirect.
Expected Result: The URL path is `/system-user-dashboard`.

# Expected Final Result

The authenticated session lands at `/system-user-dashboard`.
