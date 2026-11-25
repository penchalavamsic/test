# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "History Switch" → "Visibility"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; Dashboard loaded, pending section visible.

# Test Steps

1. Navigate to dashboard, wait for full render. 2. Locate history switch via getByRole('switch', { name: 'Show License Request History' }).

# Expected Final Result

The Show License Request History switch is visible.
