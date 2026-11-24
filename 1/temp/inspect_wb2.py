import sys
sys.stdout.reconfigure(encoding='utf-8')
from openpyxl import load_workbook

wb = load_workbook(r'D:\LIMAS\limas-test-automation\inventory\LIMAS_3_Simple_Test_Checklist.xlsx', data_only=False)
ws = wb['Test Checklist']

for r in range(5, 20):
    vals = [ws.cell(row=r, column=c).value for c in range(1, 13)]
    print(r, vals)

print('---searching for 065---')
for r in range(5, ws.max_row + 1):
    tid = ws.cell(row=r, column=1).value
    if tid is not None and '065' in str(tid):
        print(r, tid)

print('---searching for SUD---')
count = 0
for r in range(5, ws.max_row + 1):
    tid = ws.cell(row=r, column=1).value
    if tid is not None and 'SUD' in str(tid):
        count += 1
        if count <= 5:
            print(r, tid)
print('total SUD rows:', count)
