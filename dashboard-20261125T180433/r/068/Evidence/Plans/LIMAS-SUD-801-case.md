# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card.
   Expected Result: EFC section renders.

2. Action: Inspect the date input for an autocomplete attribute.
   Expected Result: No `autocomplete` attribute is present on the element.

# Expected Final Result

No autocomplete attribute on the date input.
