# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, wait for initial EFC load, fill search with "testquery".
   Expected Result: No new GET request to `/api/flconfig/` is observed after filling the search input.

# Expected Final Result

Filling the EFC search sends no flconfig API request.
