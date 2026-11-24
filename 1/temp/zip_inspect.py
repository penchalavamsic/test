import zipfile, json

z = zipfile.ZipFile(r"D:\LIMAS\limas-test-automation\test-runs\system-user-dashboard_SUD-PL-02-C2_2026-11-23_22-08-52_SUPER_USER_ADMIN_USER\Technical-Evidence.zip")
data = json.loads(z.read("results.json"))

for s in data.get("suites", []):
    for sp in s.get("specs", []):
        for t in sp.get("tests", []):
            for r in t.get("results", []):
                title = " ".join(t.get("title", ["?"]))
                att_names = [a.get("name","?") for a in r.get("attachments", [])]
                print(f"{r.get('status','?'):10s} | {title[:70]:70s} | {att_names}")
z.close()
