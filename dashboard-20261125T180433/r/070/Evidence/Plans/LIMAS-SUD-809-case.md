# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, select Maintenance radio.
   Expected Result: Maintenance filter is active.

2. Action: Fill the date input with a date value.
   Expected Result: A GET request is dispatched to `/limas/api/flconfig/m/{date}/{userId}?page=0&size=5`.

# Expected Final Result

Date change with Maintenance radio uses `/limas/api/flconfig/m/`.
