// ACConfig.js
// Global configuration for this Accounting Cycle exercise
// (Green River Computer Consultants – ACR4.4, July 2025).

const exerciseConfig = {
  // App labels
  appTitle: "Accounting Cycle – Green River Computer Consultants",
  subtitle:
    "July transactions, adjusting entries, and closing entries (ACR4.4).",

  // Entity / report labels
  entityName: "Green River Computer Consultants",
  chartWindowTitle: "Chart of Accounts – Green River Computer Consultants",
  tbWindowTitle: "Trial Balance",
  tbEntityName: "Green River Computer Consultants – Trial Balance",

  // Mode: "exercise" (feedback & grading) or "test" (no feedback / grading)
  mode: "exercise",
  // mode: "test",

  // How to label the starting balances in the ledger:
  // "beginning"  → “Beginning balance”
  // "unadjusted" → “Unadjusted balance”
  // startingBalanceLabelMode: "unadjusted", // when needed
  // startingBalanceLabelMode: "beginning", // default, undefined

  // Login / initial screen
  useLoginScreen: true,
  loginTitle: "Accounting Cycle Practice",
  loginSubtitle: "Green River Computer Consultants (ACR4.4)",
  loginPrompt:
    "Enter your name (optional) and password to begin.",
  // Empty string = no password required
  loginPassword: "KUBS",
  loginButtonLabel: "Start",

  // Footer
  footerText:
    "For Korea University classroom use only. Do not redistribute.",
  copyright:
    `© ${new Date().getFullYear()} Jinhan Pae. All rights reserved.`
};
