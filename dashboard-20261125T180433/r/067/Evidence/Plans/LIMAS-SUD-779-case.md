# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card.
   Expected Result: EFC section renders.

2. Action: Assert the Expires Until date input is visible.
   Expected Result: Element is visible with `display` not none and `visibility` not hidden.

# Expected Final Result

Expires Until date input is visible.
