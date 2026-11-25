# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Approve Request Button Visible"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.

# Test Steps

1. Action: Open the inline approval form.
Expected Result: Form is visible.
2. Action: Locate the "Approve Request" button within the form.
Expected Result: A button labeled "Approve Request" is visible (distinct from the row-level Approve/Close toggle button).

# Expected Final Result

The "Approve Request" button is visible inside the inline approval form.
