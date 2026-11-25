# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Inline Form" → "Form Restoration After Cancel — Default State on Reopen"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The inline approval form was previously open, some fields were filled, and Cancel was clicked.

# Test Steps

1. Action: Open form, fill User Group and Profile, then click Cancel.
Expected Result: Form closes, Approve button reappears.
2. Action: Click Approve again on the same row.
Expected Result: Form reopens.
3. Action: Verify form state.
Expected Result: User Group shows "Select User Group" placeholder, Profile shows "Select Profile" placeholder, Approve Request button is disabled — form is in default clean state.

# Expected Final Result

Reopening the form after cancel restores the default empty state — no prior selections persist.
