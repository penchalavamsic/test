# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Count Display" → "Loaded·Total Format Visible"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: The Pending License Requests section is visible with data loaded.
2. Action: Locate the count display text.
Expected Result: Text matching the pattern `/\d+\s*loaded[·•]\d+\s*total\s+pending/` is visible on the page.

# Expected Final Result

The count display shows the loaded/total format, visible on the page.
