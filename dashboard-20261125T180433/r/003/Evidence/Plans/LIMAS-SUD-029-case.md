# Purpose

To verify the functionality of "System User Dashboard" → "Sidebar Navigation" → "Toggle Button" → "Visibility & Enabled State"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The sidebar dialog is open (after Ctrl+B).

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Press Ctrl+B to open the sidebar dialog.
Expected Result: The sidebar dialog is visible.
3. Action: Locate the first `<li>` item in the sidebar list and inspect its button.
Expected Result: The first `<li>` contains a button with a panel-left-close icon and text "Toggle Sidebar".
4. Action: Verify the button is visible and not disabled.
Expected Result: The button is visible and has no `disabled` attribute or `aria-disabled="true"`.

# Expected Final Result

The Toggle Sidebar button is the first item in the sidebar list, visible and enabled when the dialog is open.
