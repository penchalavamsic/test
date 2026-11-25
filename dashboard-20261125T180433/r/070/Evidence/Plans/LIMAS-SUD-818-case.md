# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, fill a date, observe response.
   Expected Result: Data loads for the filled date.

2. Action: Clear the date input.
   Expected Result: A request is dispatched with the current date; the UI shows the default zero-data state with empty input value.

# Expected Final Result

Clearing restores the default zero-data state.
