# Purpose

To verify the functionality of "System User Dashboard" → "Header" → "Theme Control" → "Initial Light Theme"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: Dashboard heading "System User Dashboard" is visible.
2. Action: Check the `<html>` element for the `dark` class.
Expected Result: The `dark` class is not present on `<html>`.
3. Action: Verify the moon icon is visible on the theme button.
Expected Result: The `lucide-moon` icon is present; `lucide-sun` is not.

# Expected Final Result

The initial theme is light: `<html>` has no `dark` class and the moon icon is displayed.
