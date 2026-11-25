# Purpose

To verify the functionality of "System User Dashboard" → "Approve Form" → "Date Fields" → "Accessible Labels (Accessibility)"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; At least one pending license request with an Approve button exists.

# Test Steps

1. Action: Navigate to the dashboard, wait for full render, click the Pending License Requests card, and open the Approve form.
Expected Result: The Approve form is visible.
2. Action: Inspect the Expiration Date input for accessible labeling (aria-label, aria-labelledby, or associated `<label>`).
Expected Result: Document whether the field has an accessible label. The visual label "Expiration Date*" exists but may not be programmatically associated.
3. Action: Inspect the Maintenance Date input for accessible labeling (aria-label, aria-labelledby, or associated `<label>`).
Expected Result: Do

# Expected Final Result

The date fields' accessible labeling status is documented. If labels are missing, this is recorded as an accessibility gap.
