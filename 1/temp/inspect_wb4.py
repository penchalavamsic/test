import sys, json
sys.stdout.reconfigure(encoding='utf-8')
from openpyxl import load_workbook

wb = load_workbook(r'D:\LIMAS\limas-test-automation\inventory\LIMAS_3_Simple_Test_Checklist.xlsx', data_only=False)
ws = wb['Test Checklist']

# Find rows for SUD-001, SUD-020 (batch1), SUD-034, SUD-046 (batch1 fixed), SUD-047 (SUD-PL-02-A fixed)
targets = ['LIMAS-SUD-001', 'LIMAS-SUD-020', 'LIMAS-SUD-034', 'LIMAS-SUD-046', 'LIMAS-SUD-047', 'LIMAS-SUD-048', 'LIMAS-SUD-053', 'LIMAS-SUD-027']
for r in range(5, ws.max_row + 1):
    tid = ws.cell(row=r, column=1).value
    if tid is not None and str(tid).strip() in targets:
        vals = [ws.cell(row=r, column=c).value for c in range(1, 13)]
        print(r, json.dumps(vals, ensure_ascii=False))
        print('---')
