# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Section Heading" → "Heading Level 3 Visible"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard is fully rendered.
2. Action: Locate the heading with role="heading", level=3, and name "Pending License Requests".
Expected Result: The heading is found and visible.
3. Action: Verify the heading is inside the main content area.
Expected Result: The heading is within `<main>` or the visible content section.

# Expected Final Result

A level-3 heading reading "Pending License Requests" is visible in the content area.
