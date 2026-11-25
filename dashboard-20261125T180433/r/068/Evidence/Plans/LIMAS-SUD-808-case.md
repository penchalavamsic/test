# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, fill a date, wait for request to complete.
   Expected Result: Data loads for the filled date.

2. Action: Clear the date input value.
   Expected Result: A new GET request is dispatched with the current date as the date parameter.

# Expected Final Result

Clearing the input triggers a request using the default current date.
