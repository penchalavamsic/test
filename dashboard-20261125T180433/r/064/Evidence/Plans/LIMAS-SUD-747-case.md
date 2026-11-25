# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, zero-data state visible.

# Test Steps

1. Action: Navigate and click EFC card.
   Expected Result: Section renders, Expiration is checked, Maintenance is unchecked.

2. Action: Click Maintenance radio.
   Expected Result: Maintenance is checked, Expiration is unchecked. Checked count is 1.

# Expected Final Result

Both radios are never checked simultaneously.
