# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Search" → "Results Announcement (Accessibility)"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; At least one pending license request exists in the table.

# Test Steps

1. Action: Navigate to the dashboard, wait for full render, click the Pending License Requests card, and confirm the table is visible.
Expected Result: The license request table is visible with rows.
2. Action: Locate the search input and confirm it has the placeholder "Search license requests...".
Expected Result: The search input is visible with the expected placeholder.
3. Action: Type a filter string into the search input and observe whether any aria-live region or status announcement appears.
Expected Result: No element with `aria-live="polite"`, `aria-live="assertive"`, or `role="status"

# Expected Final Result

The search filter operates as a client-side visual filter with no screen-reader announcement of changed results. This is documented as an accessibility gap.
