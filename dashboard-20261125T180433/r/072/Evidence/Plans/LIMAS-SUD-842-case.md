# Purpose

To verify the functionality of \

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, wait for initial EFC load, fill search with "testquery".
   Expected Result: Search input has value "testquery".

2. Action: Click Maintenance radio and wait for the maintenance API response.
   Expected Result: The search input still contains "testquery".

# Expected Final Result

Search value persists across filter radio changes.
