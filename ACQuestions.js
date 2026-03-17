// ACQuestions.js
// Green River Computer Consultants – Accounting Cycle (ACR4.4)
// set: "T" (regular transactions), "A" (adjusting), or "closing"

// Use the actual current year dynamically.
const CURRENT_YEAR = new Date().getFullYear();

const journalQuestions = [
  // --- Set T: Regular transactions (1–15) ---
  {
    id: 1,
    set: "T",
    title: "[T] Purchase equipment and note",
    date: `${CURRENT_YEAR}-07-01`,
    description:
      "Purchased equipment, paying ¥4,000 cash and signing a 2-year note payable for ¥20,000. "
      + "The equipment has a 4-year useful life. The note has a 6% interest rate, payable monthly.",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: false,
    correctLines: [
      { accountId: 150, debit: 24000, credit: 0 },
      { accountId: 101, debit: 0, credit: 4000 },
      { accountId: 210, debit: 0, credit: 20000 }
    ],
    explanation:
      "Record the equipment at total cost (cash plus note). Interest is recorded later via an adjusting entry."
  },
  {
    id: 2,
    set: "T",
    title: "[T] Share issue for cash",
    date: `${CURRENT_YEAR}-07-02`,
    description:
      "Shareholders invested ¥50,000 cash in the company in exchange for ordinary shares.",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: false,
    correctLines: [
      { accountId: 101, debit: 50000, credit: 0 },
      { accountId: 301, debit: 0, credit: 50000 }
    ],
    explanation:
      "Cash increases and share capital increases; this is an equity transaction, not revenue."
  },
  {
    id: 3,
    set: "T",
    title: "[T] Prepaid insurance",
    date: `${CURRENT_YEAR}-07-03`,
    description:
      "Paid ¥3,600 cash for a 12‑month insurance policy effective July 1.",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: false,
    correctLines: [
      { accountId: 130, debit: 3600, credit: 0 },
      { accountId: 101, debit: 0, credit: 3600 }
    ],
    explanation:
      "Record the payment as a prepaid asset; one month of insurance will be expensed at July 31."
  },
  {
    id: 4,
    set: "T",
    title: "[T] Prepaid rent",
    date: `${CURRENT_YEAR}-07-03`,
    description:
      "Paid the first two months’ rent for an annual lease of office space at ¥4,000 per month (July and August).",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: false,
    correctLines: [
      { accountId: 140, debit: 8000, credit: 0 },
      { accountId: 101, debit: 0, credit: 8000 }
    ],
    explanation:
      "Two months of rent are paid in advance and recorded as a prepaid asset."
  },
  {
    id: 5,
    set: "T",
    title: "[T] Purchase supplies",
    date: `${CURRENT_YEAR}-07-06`,
    description:
      "Paid ¥3,800 cash for supplies.",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: false,
    correctLines: [
      { accountId: 120, debit: 3800, credit: 0 },
      { accountId: 101, debit: 0, credit: 3800 }
    ],
    explanation:
      "Supplies are recorded as an asset when purchased; supplies expense will be recognized when used."
  },
  {
    id: 6,
    set: "T",
    title: "[T] Consulting agreement only",
    date: `${CURRENT_YEAR}-07-09`,
    description:
      "Visited client offices and agreed on the terms of a consulting project. Green River will bill Connor Productions on the 20th of each month for services performed.",
    requiresEntry: false,
    isAdjusting: false,
    isClosing: false,
    correctLines: [],
    explanation:
      "Agreeing on terms for future services does not create a transaction; no entry is required."
  },
  {
    id: 7,
    set: "T",
    title: "[T] Collection on account",
    date: `${CURRENT_YEAR}-07-10`,
    description:
      "Collected ¥1,200 cash on account from Milani Brothers. This client was billed in June when the service was performed.",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: false,
    correctLines: [
      { accountId: 101, debit: 1200, credit: 0 },
      { accountId: 110, debit: 0, credit: 1200 }
    ],
    explanation:
      "This is a collection of an existing receivable; no new revenue is recognized."
  },
  {
    id: 8,
    set: "T",
    title: "[T] Earn unearned revenue",
    date: `${CURRENT_YEAR}-07-13`,
    description:
      "Performed services for Fitzgerald Enterprises. The client paid ¥1,120 in advance last month. All related services are now completed.",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: false,
    correctLines: [
      { accountId: 250, debit: 1120, credit: 0 },
      { accountId: 501, debit: 0, credit: 1120 }
    ],
    explanation:
      "Reclassify the liability to revenue now that the services have been performed."
  },
  {
    id: 9,
    set: "T",
    title: "[T] Pay June utilities",
    date: `${CURRENT_YEAR}-07-14`,
    description:
      "Paid ¥400 cash for a utility bill related to June utilities that were accrued at June 30.",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: false,
    correctLines: [
      { accountId: 201, debit: 400, credit: 0 },
      { accountId: 101, debit: 0, credit: 400 }
    ],
    explanation:
      "This payment reduces the existing payable; do not record utility expense again."
  },
  {
    id: 10,
    set: "T",
    title: "[T] Cash received in advance",
    date: `${CURRENT_YEAR}-07-16`,
    description:
      "Received ¥12,000 cash in advance from Thunder Bay Technologies for future services.",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: false,
    correctLines: [
      { accountId: 101, debit: 12000, credit: 0 },
      { accountId: 250, debit: 0, credit: 12000 }
    ],
    explanation:
      "Because services have not yet been performed, record a liability (unearned service revenue)."
  },
  {
    id: 11,
    set: "T",
    title: "[T] Pay salaries",
    date: `${CURRENT_YEAR}-07-18`,
    description:
      "Paid semi‑monthly salaries of ¥11,000.",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: false,
    correctLines: [
      { accountId: 604, debit: 11000, credit: 0 },
      { accountId: 101, debit: 0, credit: 11000 }
    ],
    explanation:
      "Record salaries expense when paid for the first half of July; the second half will be accrued at month‑end."
  },
  {
    id: 12,
    set: "T",
    title: "[T] Services on account",
    date: `${CURRENT_YEAR}-07-20`,
    description:
      "Performed services worth ¥28,000 on account and billed customers.",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: false,
    correctLines: [
      { accountId: 110, debit: 28000, credit: 0 },
      { accountId: 501, debit: 0, credit: 28000 }
    ],
    explanation:
      "Recognize service revenue and a receivable when services are performed and billed."
  },
  {
    id: 13,
    set: "T",
    title: "[T] Advertising on account",
    date: `${CURRENT_YEAR}-07-20`,
    description:
      "Received a bill for ¥2,200 for advertising services received during July. The amount is due August 15.",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: false,
    correctLines: [
      { accountId: 605, debit: 2200, credit: 0 },
      { accountId: 201, debit: 0, credit: 2200 }
    ],
    explanation:
      "Advertising expense is recognized when services are received; a payable is recorded until payment."
  },
  {
    id: 14,
    set: "T",
    title: "[T] Earn Thunder Bay revenue",
    date: `${CURRENT_YEAR}-07-23`,
    description:
      "Performed the first phase of the project for Thunder Bay Technologies and recognized ¥10,000 of revenue from the cash advance received July 16.",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: false,
    correctLines: [
      { accountId: 250, debit: 10000, credit: 0 },
      { accountId: 501, debit: 0, credit: 10000 }
    ],
    explanation:
      "Reduce unearned service revenue and recognize service revenue for the portion now earned."
  },
  {
    id: 15,
    set: "T",
    title: "[T] Collection on July 20 receivables",
    date: `${CURRENT_YEAR}-07-27`,
    description:
      "Received ¥15,000 cash from customers billed on July 20.",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: false,
    correctLines: [
      { accountId: 101, debit: 15000, credit: 0 },
      { accountId: 110, debit: 0, credit: 15000 }
    ],
    explanation:
      "Collect a portion of the receivables created on July 20; no additional revenue is recognized."
  },

  // --- Set A: Adjusting entries (16–23) ---
  {
    id: 16,
    set: "A",
    title: "[A] Insurance adjustment",
    date: `${CURRENT_YEAR}-07-31`,
    description:
      "Adjust prepaid insurance for one month of coverage on the ¥3,600 annual policy.",
    requiresEntry: true,
    isAdjusting: true,
    isClosing: false,
    correctLines: [
      { accountId: 603, debit: 300, credit: 0 },
      { accountId: 130, debit: 0, credit: 300 }
    ],
    explanation:
      "One month of the annual policy has expired: ¥3,600 × 1/12 = ¥300 insurance expense."
  },
  {
    id: 17,
    set: "A",
    title: "[A] Rent adjustment",
    date: `${CURRENT_YEAR}-07-31`,
    description:
      "Adjust prepaid rent for July occupancy. Two months (July and August) were prepaid on July 3 for ¥8,000 total.",
    requiresEntry: true,
    isAdjusting: true,
    isClosing: false,
    correctLines: [
      { accountId: 608, debit: 4000, credit: 0 },
      { accountId: 140, debit: 0, credit: 4000 }
    ],
    explanation:
      "Recognize one month of rent expense: ¥8,000 ÷ 2 months = ¥4,000 for July."
  },
  {
    id: 18,
    set: "A",
    title: "[A] Supplies used",
    date: `${CURRENT_YEAR}-07-31`,
    description:
      "Supplies used during July were ¥1,250.",
    requiresEntry: true,
    isAdjusting: true,
    isClosing: false,
    correctLines: [
      { accountId: 601, debit: 1250, credit: 0 },
      { accountId: 120, debit: 0, credit: 1250 }
    ],
    explanation:
      "Transfer the cost of supplies used from the asset account to supplies expense."
  },
  {
    id: 19,
    set: "A",
    title: "[A] Depreciation on equipment",
    date: `${CURRENT_YEAR}-07-31`,
    description:
      "Record one month of depreciation on equipment (cost ¥24,000, useful life 4 years).",
    requiresEntry: true,
    isAdjusting: true,
    isClosing: false,
    correctLines: [
      { accountId: 602, debit: 500, credit: 0 },
      { accountId: 160, debit: 0, credit: 500 }
    ],
    explanation:
      "Monthly depreciation: ¥24,000 ÷ 4 years ÷ 12 months = ¥500 per month."
  },
  {
    id: 20,
    set: "A",
    title: "[A] Interest on note payable",
    date: `${CURRENT_YEAR}-07-31`,
    description:
      "Accrue one month of interest on the ¥20,000 note payable at 6% annual interest.",
    requiresEntry: true,
    isAdjusting: true,
    isClosing: false,
    correctLines: [
      { accountId: 607, debit: 100, credit: 0 },
      { accountId: 220, debit: 0, credit: 100 }
    ],
    explanation:
      "Interest for July: ¥20,000 × 6% × 1/12 = ¥100."
  },
  {
    id: 21,
    set: "A",
    title: "[A] Accrued salaries",
    date: `${CURRENT_YEAR}-07-31`,
    description:
      "Accrue salaries for the second half of July, ¥11,000, to be paid on August 1.",
    requiresEntry: true,
    isAdjusting: true,
    isClosing: false,
    correctLines: [
      { accountId: 604, debit: 11000, credit: 0 },
      { accountId: 240, debit: 0, credit: 11000 }
    ],
    explanation:
      "Recognize salaries earned by employees but not yet paid at July 31."
  },
  {
    id: 22,
    set: "A",
    title: "[A] Utilities accrual",
    date: `${CURRENT_YEAR}-07-31`,
    description:
      "Accrue estimated utilities expense for July of ¥800.",
    requiresEntry: true,
    isAdjusting: true,
    isClosing: false,
    correctLines: [
      { accountId: 609, debit: 800, credit: 0 },
      { accountId: 201, debit: 0, credit: 800 }
    ],
    explanation:
      "Record estimated July utilities as an expense and a liability to be paid later."
  },
  {
    id: 23,
    set: "A",
    title: "[A] Income tax accrual",
    date: `${CURRENT_YEAR}-07-31`,
    description:
      "Accrue income tax expense for July of ¥1,200; taxes will be paid in August.",
    requiresEntry: true,
    isAdjusting: true,
    isClosing: false,
    correctLines: [
      { accountId: 606, debit: 1200, credit: 0 },
      { accountId: 230, debit: 0, credit: 1200 }
    ],
    explanation:
      "Recognize July income tax expense and the related liability."
  },

  // --- Set C: Closing entries (24–26) ---
  {
    id: 24,
    set: "closing",
    title: "[C] Close revenues to Income Summary",
    date: `${CURRENT_YEAR}-07-31`,
    description:
      "Close Service Revenue to Income Summary at July 31.",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: true,
    correctLines: [
      { accountId: 501, debit: 39120, credit: 0 },
      { accountId: 999, debit: 0, credit: 39120 }
    ],
    explanation:
      "Close the credit balance of Service Revenue (¥39,120) to Income Summary."
  },
  {
    id: 25,
    set: "closing",
    title: "[C] Close expenses to Income Summary",
    date: `${CURRENT_YEAR}-07-31`,
    description:
      "Close all expense accounts to Income Summary at July 31.",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: true,
    correctLines: [
      { accountId: 999, debit: 32350, credit: 0 },
      { accountId: 604, debit: 0, credit: 22000 },
      { accountId: 608, debit: 0, credit: 4000 },
      { accountId: 605, debit: 0, credit: 2200 },
      { accountId: 601, debit: 0, credit: 1250 },
      { accountId: 609, debit: 0, credit: 800 },
      { accountId: 602, debit: 0, credit: 500 },
      { accountId: 603, debit: 0, credit: 300 },
      { accountId: 607, debit: 0, credit: 100 },
      { accountId: 606, debit: 0, credit: 1200 }
    ],
    explanation:
      "Close all expense accounts to Income Summary for a total of ¥32,350."
  },
  {
    id: 26,
    set: "closing",
    title: "[C] Close Income Summary to Retained Earnings",
    date: `${CURRENT_YEAR}-07-31`,
    description:
      "Close the balance of Income Summary to Retained Earnings at July 31.",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: true,
    correctLines: [
      { accountId: 999, debit: 6770, credit: 0 },
      { accountId: 310, debit: 0, credit: 6770 }
    ],
    explanation:
      "Net income for July (¥6,770) is transferred from Income Summary to Retained Earnings."
  }
];
