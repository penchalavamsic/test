# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, zero-data state visible.

# Test Steps

1. Action: Tab to focus the radio group (Maintenance checked), then press ArrowLeft.
   Expected Result: Expiration radio becomes checked and API request to /limas/api/flconfig/e/ is triggered.

# Expected Final Result

ArrowLeft selects Expiration and triggers its API request.
