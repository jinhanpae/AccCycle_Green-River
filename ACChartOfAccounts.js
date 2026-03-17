// ACChartOfAccounts.js
// Chart of accounts for Green River Computer Consultants (ACR4.4)

// Code scheme:
// Assets 100s, Liabilities 200s, Equity 300s, Dividends 400s,
// Revenues 500s, Expenses 600s, Income Summary 999.

const chartOfAccounts = [
  // Assets (100s)
  { id: 101, code: "101", name: "Cash", type: "Asset", beginningBalance: 5230 },
  { id: 110, code: "110", name: "Accounts Receivable", type: "Asset", beginningBalance: 1200 },
  { id: 120, code: "120", name: "Supplies", type: "Asset", beginningBalance: 690 },
  { id: 130, code: "130", name: "Prepaid Insurance", type: "Asset", beginningBalance: 0 },
  { id: 140, code: "140", name: "Prepaid Rent", type: "Asset", beginningBalance: 0 },
  { id: 150, code: "150", name: "Equipment", type: "Asset", beginningBalance: 0 },

  // Contra‑asset (still type Asset for TB sign logic)
  { id: 160, code: "160", name: "Accumulated Depreciation—Equipment", type: "Asset", beginningBalance: 0 },

  // Liabilities (200s)
  { id: 201, code: "201", name: "Accounts Payable", type: "Liability", beginningBalance: -400 },
  { id: 210, code: "210", name: "Notes Payable", type: "Liability", beginningBalance: 0 },
  { id: 220, code: "220", name: "Interest Payable", type: "Liability", beginningBalance: 0 },
  { id: 230, code: "230", name: "Income Taxes Payable", type: "Liability", beginningBalance: 0 },
  { id: 240, code: "240", name: "Salaries and Wages Payable", type: "Liability", beginningBalance: 0 },
  { id: 250, code: "250", name: "Unearned Service Revenue", type: "Liability", beginningBalance: -1120 },

  // Equity (300s)
  { id: 301, code: "301", name: "Share Capital—Ordinary", type: "Equity", beginningBalance: -4000 },
  { id: 310, code: "310", name: "Retained Earnings", type: "Equity", beginningBalance: -1600 },

  // Dividends (400s)
  { id: 401, code: "401", name: "Dividends", type: "Equity", beginningBalance: 0 },

  // Revenues (500s)
  { id: 501, code: "501", name: "Service Revenue", type: "Revenue", beginningBalance: 0 },

  // Expenses (600s)
  { id: 601, code: "601", name: "Supplies Expense", type: "Expense", beginningBalance: 0 },
  { id: 602, code: "602", name: "Depreciation Expense", type: "Expense", beginningBalance: 0 },
  { id: 603, code: "603", name: "Insurance Expense", type: "Expense", beginningBalance: 0 },
  { id: 604, code: "604", name: "Salaries and Wages Expense", type: "Expense", beginningBalance: 0 },
  { id: 605, code: "605", name: "Advertising Expense", type: "Expense", beginningBalance: 0 },
  { id: 606, code: "606", name: "Income Tax Expense", type: "Expense", beginningBalance: 0 },
  { id: 607, code: "607", name: "Interest Expense", type: "Expense", beginningBalance: 0 },
  { id: 608, code: "608", name: "Rent Expense", type: "Expense", beginningBalance: 0 },
  { id: 609, code: "609", name: "Utilities Expense", type: "Expense", beginningBalance: 0 },

  // Income Summary (999)
  { id: 999, code: "999", name: "Income Summary", type: "Equity", beginningBalance: 0 }
];
