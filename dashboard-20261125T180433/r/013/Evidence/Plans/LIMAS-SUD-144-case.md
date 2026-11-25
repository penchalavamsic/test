# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Maintenance Date Equal to Expiration — Behavior"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form is open.; A User Group and Profile have been selected.; An Expiration Date has been selected (making Maintenance Date enabled).

# Test Steps

1. Action: Select User Group, Profile, and set an Expiration Date one year from today.
Expected Result: Expiration Date populated, Maintenance Date enabled.
2. Action: Type the exact same date into the Maintenance Date field.
Expected Result: Observe whether the date is accepted without error or a validation message appears.
3. Action: Verify field state.
Expected Result: Either the value is populated in the field, or a validation error is displayed.

# Expected Final Result

Setting Maintenance Date equal to Expiration Date is either accepted or triggers a validation error — the observed behavior is documented.
