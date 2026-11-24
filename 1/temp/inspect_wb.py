import sys
sys.stdout.reconfigure(encoding='utf-8')
from openpyxl import load_workbook

wb = load_workbook(r'D:\LIMAS\limas-test-automation\inventory\LIMAS_3_Simple_Test_Checklist.xlsx', data_only=False)
ws = wb['Test Checklist']

target_ids = {f'LIMAS-SUD-{i}' for i in range(65, 71)}
found = []
for r in range(5, ws.max_row + 1):
    tid = ws.cell(row=r, column=1).value
    if tid is None:
        continue
    if str(tid).strip() in target_ids:
        found.append(r)

print('Rows found for SUD-065..070:', found)
for r in found:
    vals = [ws.cell(row=r, column=c).value for c in range(1, 13)]
    print(r, vals)

# Check a few other rows for comparison (SUD-059..064)
other_ids = {f'LIMAS-SUD-{i}' for i in range(59, 65)}
found2 = []
for r in range(5, ws.max_row + 1):
    tid = ws.cell(row=r, column=1).value
    if tid is not None and str(tid).strip() in other_ids:
        found2.append(r)
print('Rows found for SUD-059..064:', found2)
for r in found2:
    vals = [ws.cell(row=r, column=c).value for c in range(1, 13)]
    print(r, vals)

print('Total rows with Test ID (A5:A2708):', sum(1 for r in range(5, 2709) if ws.cell(row=r, column=1).value not in (None, '')))
