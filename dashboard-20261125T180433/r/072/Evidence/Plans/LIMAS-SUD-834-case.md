# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, wait for initial EFC load, check if the search input has a `closest('form')` ancestor.
   Expected Result: No form ancestor exists for the search input.

# Expected Final Result

The EFC search input is not inside a `<form>`.
