# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card.
   Expected Result: EFC section renders.

2. Action: Click the date input to open the picker, press Escape, then check focus.
   Expected Result: Focus is on the date input after Escape closes the picker.

# Expected Final Result

Focus returns to the date input after Escape.
