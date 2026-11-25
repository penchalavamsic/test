# Purpose

To verify the functionality of "System User Dashboard" -> "Expiring Floating Configurations" -> "Combined Date and Search" -> "Clear search preserves date and produces no request"

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, wait for initial EFC load. Perform combined date+search interaction.

# Expected Final Result

Clearing search while date is populated produces no flconfig API request and date value remains.
