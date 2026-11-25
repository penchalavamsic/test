# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, fill a date that yields zero results.
   Expected Result: Request completes with empty response.

2. Action: Assert the count text displays zero values.
   Expected Result: Count shows "0" for relevant categories derived from the response totalElements.

# Expected Final Result

Zero counts displayed after date change with no results.
