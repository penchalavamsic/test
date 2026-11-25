# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, zero-data state visible.

# Test Steps

1. Action: Click Maintenance radio and observe network.
   Expected Result: Exactly one request to /limas/api/flconfig/m/ is sent.

# Expected Final Result

One Maintenance API request per selection trigger.
