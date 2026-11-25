# Purpose

To verify the functionality of "System User Dashboard" -> "Expiring Floating Configurations" -> "Combined Date and Search" -> "Clear date preserves search and triggers default-date GET"

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, wait for initial EFC load. Perform combined date+search interaction.

# Expected Final Result

Clearing date while search is populated triggers default-date flconfig GET and search value remains.
