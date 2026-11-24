import sys, json
sys.stdout.reconfigure(encoding='utf-8')
from openpyxl import load_workbook

wb = load_workbook(r'D:\LIMAS\limas-test-automation\inventory\LIMAS_3_Simple_Test_Checklist.xlsx', data_only=False)
ws = wb['Test Checklist']

for r in range(89, 102):
    vals = [ws.cell(row=r, column=c).value for c in range(1, 13)]
    print(r, json.dumps(vals, ensure_ascii=False))
