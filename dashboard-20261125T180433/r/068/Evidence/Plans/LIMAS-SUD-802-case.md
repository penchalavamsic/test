# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, then fill the date input with a past date.
   Expected Result: A GET request is dispatched to the flconfig API.

2. Action: Verify the request method and target path.
   Expected Result: GET request with path matching `/limas/api/flconfig/` and containing the past date.

# Expected Final Result

Past date selection triggers a GET request.
