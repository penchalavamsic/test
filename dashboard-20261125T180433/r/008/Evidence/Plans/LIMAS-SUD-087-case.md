# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Approve Button" → "Approve Opens Inline Form & Button Text Changes to Close"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; At least one pending license request is visible in the Pending License Requests tab.

# Test Steps

1. Action: Navigate to dashboard, wait for full render, and click the Pending License Requests tab.
Expected Result: The Pending License Requests tab is active and at least one request row is visible with an Approve button.
2. Action: Click the Approve button on the first pending request row.
Expected Result: The button text changes from "Approve" to "Close" and an inline form appears below (or within) the row.
3. Action: Verify the button state attributes.
Expected Result: The button reflects `[expanded]` and `[active]` states (aria-expanded="true").

# Expected Final Result

Clicking Approve opens the inline approval form and the Approve button text becomes "Close" with expanded state.
