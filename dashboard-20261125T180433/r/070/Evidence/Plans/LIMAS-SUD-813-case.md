# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, fill invalid text into the date input.
   Expected Result: Browser rejects the text, value is cleared.

2. Action: Inspect the network request URL triggered by the change handler.
   Expected Result: Request URL contains the current date as the date parameter.

# Expected Final Result

Invalid text input triggers a request with the default current date.
