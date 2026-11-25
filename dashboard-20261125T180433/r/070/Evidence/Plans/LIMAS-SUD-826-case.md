# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, wait for initial EFC load, inspect the search input's `labels` property.
   Expected Result: The `labels` collection is empty (length 0).

# Expected Final Result

The EFC search input has no associated label.
