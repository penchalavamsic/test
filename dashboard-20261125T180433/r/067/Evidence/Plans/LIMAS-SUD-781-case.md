# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card.
   Expected Result: EFC section renders.

2. Action: Assert the input element's type attribute.
   Expected Result: Element has `type="date"`.

# Expected Final Result

Input element type is "date".
