# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Expiration Date Calendar Picker Opens on Click"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; A User Group and Profile have been selected (so the Expiration Date field is visible).

# Test Steps

1. Action: Select User Group and Profile to reveal the Expiration Date field.
Expected Result: Expiration Date* input field is visible.
2. Action: Click the Expiration Date input field.
Expected Result: A calendar popup/dialog appears (likely a MUI date picker popup or native calendar widget).
3. Action: Verify the calendar widget is visible and interactive.
Expected Result: The calendar widget contains month navigation and selectable day cells.

# Expected Final Result

Clicking the Expiration Date field opens a calendar picker widget.
