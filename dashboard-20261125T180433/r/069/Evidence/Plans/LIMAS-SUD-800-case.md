# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card.
   Expected Result: EFC section renders.

2. Action: Inspect DOM around the date input for a separate calendar icon element.
   Expected Result: No sibling or child element functions as a separate calendar trigger icon.

# Expected Final Result

No separate calendar icon element exists.
