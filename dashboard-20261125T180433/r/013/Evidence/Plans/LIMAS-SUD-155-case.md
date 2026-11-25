# Purpose

To verify the functionality of "System User Dashboard" → "Approve Form" → "Required Fields" → "Asterisk Indicators Are Visual-Only (Accessibility)"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; At least one pending license request with an Approve button exists.

# Test Steps

1. Action: Navigate to the dashboard, wait for full render, click the Pending License Requests card, and open the Approve form by clicking the first Approve button.
Expected Result: The Approve form is visible with required field labels ending in "*".
2. Action: Inspect the User Group combobox for aria-required.
Expected Result: The combobox does not have `aria-required="true"`.
3. Action: Inspect the Profile combobox for aria-required.
Expected Result: The combobox does not have `aria-required="true"`.
4. Action: Inspect the Expiration Date field for aria-required.
Expected Result: The Expira

# Expected Final Result

Required fields are indicated only by the visual asterisk (*) character with no aria-required attribute, creating an accessibility gap for screen-reader users.
