# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, ensure date input is empty and Expiration is selected.
   Expected Result: Zero-data state is visible with Expiration filter active.

2. Action: Click the Maintenance radio.
   Expected Result: A request is dispatched; the empty state is preserved with the Maintenance filter active.

# Expected Final Result

Filter switch with empty date restores the default zero-data state.
