# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, Expires Until empty, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, fill a date and observe the network request URL.
   Expected Result: Request URL contains the date formatted as "MMMM d, yyyy" and URL-encoded (e.g., "November%206%2C%202025").

# Expected Final Result

Date in URL path is formatted "MMMM d, yyyy" and URL-encoded.
