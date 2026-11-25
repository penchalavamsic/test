# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Processed View" → "Session stability"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; Dashboard loaded.

# Test Steps

1. Navigate to dashboard, wait for full render. 2. Enable history. 3. Verify heading, summary cards, and URL remain unchanged.

# Expected Final Result

Session remains stable after enabling history — heading, cards, URL preserved.
