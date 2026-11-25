# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, fill the date input with invalid text (e.g., "abc").
   Expected Result: Browser clears the input value; the React change handler fires.

2. Action: Observe the resulting request.
   Expected Result: A GET request is dispatched using the default current date.

# Expected Final Result

Invalid text is cleared and triggers a default-date request.
