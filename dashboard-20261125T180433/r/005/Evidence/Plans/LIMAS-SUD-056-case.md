# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Section Subtitle" → "Subtitle Text Visible"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard is fully rendered with the Pending License Requests card selected.
2. Action: Locate the subtitle element with text "License requests awaiting review."
Expected Result: The subtitle is visible.
3. Action: Verify the subtitle appears below the section heading.
Expected Result: The subtitle is positioned after the "Pending License Requests" heading in the DOM order.

# Expected Final Result

The subtitle "License requests awaiting review." is visible below the "Pending License Requests" section heading.
