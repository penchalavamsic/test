# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, fill a date value.
   Expected Result: Request is dispatched.

2. Action: Wait for the request to complete, then read the date input value.
   Expected Result: The filled date value is still present in the input.

# Expected Final Result

Date value persists after the request completes.
