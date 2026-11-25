# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, zero-data state visible.

# Test Steps

1. Action: Tab to focus Expiration radio, then press ArrowRight.
   Expected Result: Maintenance radio becomes checked and API request to /limas/api/flconfig/m/ is triggered.

# Expected Final Result

ArrowRight selects Maintenance and triggers its API request.
