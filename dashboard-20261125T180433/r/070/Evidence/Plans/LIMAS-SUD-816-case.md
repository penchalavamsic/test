# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, capture the count label text before date change.
   Expected Result: Count labels have their default wording.

2. Action: Fill a date, wait for the request to complete, then capture count labels again.
   Expected Result: Count label wording is unchanged from the initial state.

# Expected Final Result

Count wording is unchanged after date change.
