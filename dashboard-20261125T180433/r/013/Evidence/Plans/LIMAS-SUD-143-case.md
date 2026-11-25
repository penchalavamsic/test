# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Maintenance Date Before Expiration — Validation or Behavior"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; A User Group and Profile have been selected.; An Expiration Date has been selected (making Maintenance Date enabled).

# Test Steps

1. Action: Select User Group, Profile, and set an Expiration Date one year from today.
Expected Result: Expiration Date populated, Maintenance Date enabled.
2. Action: Type a Maintenance Date that is one day before the Expiration Date.
Expected Result: Observe the system response — either a validation error message appears, or the date is accepted without error.
3. Action: If validation error appears, verify the error message is visible.
Expected Result: Error text is displayed near the field. If no validation, verify the field value is accepted.

# Expected Final Result

Setting Maintenance Date before Expiration Date triggers either a validation error or is accepted — the observed behavior is documented.
