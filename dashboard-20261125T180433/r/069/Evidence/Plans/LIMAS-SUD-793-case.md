# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card.
   Expected Result: EFC section renders.

2. Action: Assert the date input does not have a placeholder attribute.
   Expected Result: `placeholder` attribute is absent from the element.

# Expected Final Result

No placeholder on the date input.
