# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card.
   Expected Result: EFC section renders.

2. Action: Assert a `<label>` element exists with `for="floating-expires-before"`.
   Expected Result: Label element references the input by id.

# Expected Final Result

Label is explicitly associated with the date input via the for attribute.
