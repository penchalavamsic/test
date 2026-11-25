# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "License Assignment Heading Visibility"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.

# Test Steps

1. Action: Navigate to dashboard, switch to Pending License Requests tab, click Approve on first row.
Expected Result: Inline form opens.
2. Action: Locate a paragraph or heading element with text "License Assignment" within the opened form area.
Expected Result: The "License Assignment" text is visible.

# Expected Final Result

The "License Assignment" heading is visible inside the opened inline approval form.
