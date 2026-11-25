# Purpose

To verify the functionality of "System User Dashboard" → "Sidebar Navigation" → "Sidebar Trigger" → "Trigger Mechanism & Accessibility"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.; The sidebar is in its collapsed (closed) state.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Search the DOM for any button with an accessible name related to opening a sidebar (aria-label containing "sidebar", "menu", "toggle", or "open").
Expected Result: No button with a sidebar-related accessible name is found.
3. Action: Search the DOM for a button with a panel-left-open or similar icon.
Expected Result: No such button is locatable via standard accessible selectors.
4. Action: Press Ctrl+B and confirm the sidebar dialog opens.
Expected Re

# Expected Final Result

The sidebar trigger is keyboard-only (Ctrl+B); no accessible button is present in the collapsed state. The fallback test strategy uses `page.keyboard.press('Control+b')`.
