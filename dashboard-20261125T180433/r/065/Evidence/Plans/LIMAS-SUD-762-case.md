# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, zero-data state visible.

# Test Steps

1. Action: Click Maintenance radio.
   Expected Result: Sanitized request path matches /limas/api/flconfig/m/{date}/{userId} pattern.

# Expected Final Result

Maintenance request path matches contract.
