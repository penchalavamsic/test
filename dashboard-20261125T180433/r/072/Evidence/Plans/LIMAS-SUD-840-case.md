# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, wait for initial EFC load, fill search with "test".
   Expected Result: Search empty state is shown.

2. Action: Clear the search input.
   Expected Result: The default empty state returns with "No expiring floating configurations found" and "No floating license configurations match the selected date criteria." visible.

# Expected Final Result

Clearing the search restores the default empty state.
