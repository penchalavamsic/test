# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card.
   Expected Result: EFC section renders.

2. Action: Tab through the EFC section controls and assert the order.
   Expected Result: Date input receives focus after the filter radio group and before the search input.

# Expected Final Result

Date input is in the correct tab order position.
