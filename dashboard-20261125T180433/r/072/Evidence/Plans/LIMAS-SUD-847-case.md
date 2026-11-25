# Purpose

To verify the functionality of "System User Dashboard" -> "Expiring Floating Configurations" -> "Combined Date and Search" -> "Search persists after date-triggered API response"

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, wait for initial EFC load. Perform combined date+search interaction.

# Expected Final Result

Search value remains populated after filling a date triggers an API response (search-first order).
