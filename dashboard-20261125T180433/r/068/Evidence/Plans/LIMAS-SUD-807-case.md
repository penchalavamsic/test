# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, fill a date, observe the first request completes.
   Expected Result: One GET request is sent.

2. Action: Fill the same date value again.
   Expected Result: No additional GET request is dispatched (value unchanged, no re-trigger).

# Expected Final Result

No duplicate request when the same date is selected.
