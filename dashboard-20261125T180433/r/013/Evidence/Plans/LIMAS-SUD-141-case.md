# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Expiration Date Future Selection Accepted"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; A User Group and Profile have been selected.; The calendar picker is open.

# Test Steps

1. Action: Select User Group and Profile, then open the calendar picker by clicking the Expiration Date field.
Expected Result: Calendar widget appears.
2. Action: Click a future date cell in the calendar.
Expected Result: The calendar closes and the selected date populates the Expiration Date field. No validation error appears.
3. Action: Verify the field value is a non-empty date string.
Expected Result: The field displays the selected date.

# Expected Final Result

Selecting a future date from the calendar picker is accepted without validation errors.
