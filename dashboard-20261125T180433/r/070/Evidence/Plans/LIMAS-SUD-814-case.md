# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, fill a date.
   Expected Result: Request is dispatched and response is received.

2. Action: Verify the empty state UI is displayed when response has zero results.
   Expected Result: Empty state ("No Records Found" or similar) is visible, and section controls remain displayed.

# Expected Final Result

Empty state is displayed after date change with zero results.
