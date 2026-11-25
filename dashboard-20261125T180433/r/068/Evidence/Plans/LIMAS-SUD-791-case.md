# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card.
   Expected Result: EFC section renders.

2. Action: Assert the accessible tree shows no aria-required on the date input.
   Expected Result: `aria-required` is not set to "true".

# Expected Final Result

No aria-required on the date input.
