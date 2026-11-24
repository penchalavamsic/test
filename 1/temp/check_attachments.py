import json

with open(r"D:\LIMAS\limas-test-automation\test-runs\system-user-dashboard_SUD-PL-02-A_2026-11-23_15-44-56_SUPER_USER_ADMIN_USER\results.json", encoding="utf-8") as f:
    data = json.load(f)

for suite in data.get("suites", []):
    for spec in suite.get("specs", []):
        for test in spec.get("tests", []):
            for result in test.get("results", []):
                attachments = result.get("attachments", [])
                title = " ".join(test.get("title", []))
                if not title: continue
                names = [a.get("name","?") for a in attachments]
                pngs = [a["name"] for a in attachments if a.get("contentType") == "image/png"]
                diags = [a["name"] for a in attachments if "unavailable" in a.get("name","").lower() or "error" in a.get("name","").lower() or "diagnostic" in a.get("name","").lower()]
                has_final = any("final-state" in n for n in names)
                status = result.get("status","?")
                print(f"{status:10s} | {title[:60]:60s} | final={has_final} | pngs={len(pngs)} | diags={diags} | all={names}")
