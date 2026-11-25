# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, ensure Expiration radio is checked.
   Expected Result: Expiration filter is active.

2. Action: Fill the date input with a date value.
   Expected Result: A GET request is dispatched to `/limas/api/flconfig/e/{date}/{userId}?page=0&size=5`.

# Expected Final Result

Date change with Expiration radio uses `/limas/api/flconfig/e/`.
