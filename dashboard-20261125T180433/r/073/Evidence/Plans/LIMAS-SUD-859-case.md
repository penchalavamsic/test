# Purpose

To verify the functionality of "System User Dashboard" -> "Expiring Floating Configurations" -> "Combined Date and Search" -> "Maint-to-Exp switch uses /flconfig/e/ endpoint"

# Preconditions

Dashboard loaded, EFC section selected, Expiration radio checked, zero-data state visible.

# Test Steps

1. Action: Navigate to dashboard, click EFC card, wait for initial EFC load. Perform combined date+search interaction.

# Expected Final Result

Switching from Maintenance to Expiration with date set uses GET /flconfig/e/{date}/{userId}.
