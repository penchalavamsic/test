import json, sys
sys.stdout.reconfigure(encoding="utf-8")
with open(r"D:\LIMAS\limas-test-automation\temp\sud069-evidence\results.json", "r", encoding="utf-8") as f:
    data = json.load(f)

def walk(suites, path=""):
    for s in suites:
        p = path + "/" + s.get("title","")
        for spec in s.get("specs", []):
            if "069" in spec.get("title","") or "070" in spec.get("title",""):
                print("SPEC:", spec.get("title"))
                for test in spec.get("tests", []):
                    print(" projectId/name:", test.get("projectName"))
                    for res in test.get("results", []):
                        print("  status:", res.get("status"), "duration:", res.get("duration"))
                        print("  error:", json.dumps(res.get("error"), ensure_ascii=False)[:2000])
                        print("  errors:", json.dumps(res.get("errors"), ensure_ascii=False)[:2000])
                        for att in res.get("attachments", []):
                            print("   attachment:", att.get("name"), att.get("contentType"), att.get("path"))
        if "suites" in s:
            walk(s["suites"], p)

walk(data.get("suites", []))
