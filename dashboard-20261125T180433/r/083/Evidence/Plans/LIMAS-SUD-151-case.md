# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Approve Request" → "Submit Approval"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; A dedicated disposable pending request exists, identified by `${TEST_RECORD_IDENTIFIER}`.; Test data (`${TEST_USER_GROUP}`, `${TEST_PROFILE}`, `${TEST_ROLE}`, `${TEST_EXPIRATION_DATE}`, `${TEST_MAINTENANCE_DATE}`) is configured.

# Test Steps

1. Action: Navigate to the pending request identified by `${TEST_RECORD_IDENTIFIER}` using search.
Expected Result: The specific request row is visible.
2. Action: Click Approve on that row.
Expected Result: Inline form opens with Close button and License Assignment heading.
3. Action: Select `${TEST_USER_GROUP}`.
Expected Result: User Group value displayed.
4. Action: Select `${TEST_PROFILE}`.
Expected Result: Profile value displayed; Role and Expiration Date fields appear.
5. Action: Select `${TEST_ROLE}`.
Expected Result: Role value displayed.
6. Action: Set `${TEST_EXPIRATION_DATE}`.
Expec

# Expected Final Result

The approval is submitted, the API returns success, and the pending request is removed from the list.
