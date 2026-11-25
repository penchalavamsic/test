# Purpose

To verify the functionality of "System User Dashboard" → "Pending License Requests" → "Delete" → "Submit Deletion"

# Preconditions

`${LIMAS_BASE_URL}` is reachable.; Credentials for `SUPER_USER_ADMIN_USER` are configured.; A dedicated disposable pending request exists, identified by `${TEST_RECORD_IDENTIFIER}`.; `${DEDICATED_DISPOSABLE_REQUEST}` is set to `true`.

# Test Steps

1. Action: Search for the pending request identified by `${TEST_RECORD_IDENTIFIER}`.
Expected Result: The specific request row is visible.
2. Action: Click the Delete button on that row exactly once.
Expected Result: Delete button clicked.
3. Action: Wait for the observed API request.
Expected Result: A DELETE request is sent.
4. Action: Verify HTTP method, sanitized URL, and response status.
Expected Result: DELETE, URL matches expected pattern, status 200.
5. Action: Verify the pending count decreases.
Expected Result: Pending count decrements by at least 1.
6. Action: Verify the deleted req

# Expected Final Result

The request is deleted, the API returns success, and the pending list is updated.
