# Purpose

To verify the functionality of "System User Dashboard" → "Summary Cards" → "Content Section" → "Heading Updates on Card Click"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; The user is authenticated on `/system-user-dashboard`.

# Test Steps

1. Action: Navigate to the dashboard and wait for full render.
Expected Result: The "Pending License Requests" heading (level 3) is visible.
2. Action: Click the "Expiring Licenses" summary card.
Expected Result: The "Expiring Licenses" summary card now has `aria-pressed="true"`.
3. Action: Observe the content section heading.
Expected Result: The heading text changes — it no longer reads "Pending License Requests" and instead reflects the Expiring Licenses section.
4. Action: Click the "Pending License Requests" summary card again to restore.
Expected Result: The "Pending License Requests" he

# Expected Final Result

Clicking a summary card updates the content section heading to match the selected card's topic, confirming the card-to-content linkage.
