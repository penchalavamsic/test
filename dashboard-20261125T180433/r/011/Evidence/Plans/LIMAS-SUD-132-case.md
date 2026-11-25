# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Table" → "Light mode readability"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The Pending License Requests tab is selected and the table is loaded.; The theme is in light mode (no `dark` class on `<html>`).

# Test Steps

1. Action: Navigate to the dashboard, ensure the Pending License Requests tab is active, and confirm light theme is active.
Expected Result: The `<html>` element does not have the `dark` class.
2. Action: Locate the first visible data row in the table and evaluate its computed text color and background color.
Expected Result: The text color is not identical to the background color (text is distinguishable).
3. Action: Verify that at least one text element (user name paragraph) in the row is visible.
Expected Result: The paragraph is visible in light theme.

# Expected Final Result

In light theme, table row text is distinguishable from the background — the computed text color differs from the background color, and the text is visible.
