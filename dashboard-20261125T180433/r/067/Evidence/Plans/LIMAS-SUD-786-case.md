# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card.
   Expected Result: EFC section renders.

2. Action: Assert the date input is not disabled.
   Expected Result: Element does not have the `disabled` attribute.

# Expected Final Result

Date input is enabled.
