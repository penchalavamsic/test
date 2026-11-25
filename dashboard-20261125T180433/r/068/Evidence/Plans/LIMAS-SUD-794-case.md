# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card.
   Expected Result: EFC section renders.

2. Action: Press Tab until the date input receives focus.
   Expected Result: Date input is focused (document.activeElement is the input).

# Expected Final Result

Date input receives keyboard focus.
