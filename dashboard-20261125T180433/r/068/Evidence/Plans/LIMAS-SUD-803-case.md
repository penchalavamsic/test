# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, ensure Expiration radio is checked, fill past date.
   Expected Result: Request is dispatched.

2. Action: Verify the request URL path.
   Expected Result: Path is `/limas/api/flconfig/e/{date}/{userId}?page=0&size=5`.

# Expected Final Result

Past date uses expiration path when Expiration radio is active.
