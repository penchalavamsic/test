# Purpose

To verify the functionality of "System User Dashboard" → "Sidebar Navigation" → "Sidebar Dialog" → "Visibility after Ctrl+B"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The sidebar is in its collapsed (closed) state.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible. The sidebar dialog is not present in the DOM or is hidden.
2. Action: Press Ctrl+B to open the sidebar.
Expected Result: A `dialog` element with `role="dialog"` appears in the DOM and is visible.
3. Action: Locate the `<ul>` with `role="list"` inside the dialog.
Expected Result: The list contains 12 `<li>` items (1 toggle button + 11 navigation links).
4. Action: Verify the first item is the Toggle Sidebar button with a panel-left-close icon.
Expected Result: Th

# Expected Final Result

Pressing Ctrl+B opens a shadcn Sheet dialog containing a 12-item navigation list with the toggle button as the first entry.
