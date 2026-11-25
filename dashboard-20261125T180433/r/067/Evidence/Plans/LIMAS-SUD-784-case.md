# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card.
   Expected Result: EFC section renders.

2. Action: Assert the id attribute of the date input.
   Expected Result: Element id is "floating-expires-before".

# Expected Final Result

Input id is "floating-expires-before".
