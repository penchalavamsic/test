# Purpose

To verify the functionality of "System User Dashboard" -> "Expiring Floating Configurations" -> "Combined Date and Search" -> "Search after date produces no flconfig request"

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, wait for initial EFC load. Perform combined date+search interaction.

# Expected Final Result

Filling search after date set produces zero additional flconfig API requests.
