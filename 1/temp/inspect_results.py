import json

with open(r"D:\LIMAS\limas-test-automation\test-runs\system-user-dashboard_SUD-PL-02-C2_2026-11-23_22-00-58_SUPER_USER_ADMIN_USER\results.json", encoding="utf-8") as f:
    data = json.load(f)

for suite in data.get("suites", []):
    for spec in suite.get("specs", []):
        for test in spec.get("tests", []):
            for result in test.get("results", []):
                attachments = result.get("attachments", [])
                title = " ".join(test.get("title", []))
                print("Test:", title[:80])
                print("  Status:", result.get("status"))
                names = [a["name"] for a in attachments]
                print("  Attachments:", names)
                for a in attachments:
                    if a["name"] != "trace" and a["name"] != "video":
                        print("    ->", a["name"], a.get("contentType",""))
                print()
