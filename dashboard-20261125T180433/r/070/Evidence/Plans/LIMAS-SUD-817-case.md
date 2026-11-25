# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, capture the empty state text from the initial zero-data state.
   Expected Result: Empty state text is read and stored.

2. Action: Fill a date, wait for the request to complete with zero results, then capture empty state text again.
   Expected Result: Empty state wording is identical to the initial zero-data state wording.

# Expected Final Result

Empty state wording is unchanged after date change.
