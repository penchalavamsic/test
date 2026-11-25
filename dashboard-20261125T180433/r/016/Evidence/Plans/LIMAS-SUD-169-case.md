# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Processed View" → "Subtitle"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; Dashboard loaded.

# Test Steps

1. Navigate to dashboard, wait for full render. 2. Enable history. 3. Assert subtitle is "Processed License Requests — approved or deleted."

# Expected Final Result

The subtitle changes to "Processed License Requests — approved or deleted."
