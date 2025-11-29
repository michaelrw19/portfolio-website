import arkDemo from '../assets/ark/arkdemo.mp4'
import posDemo from '../assets/pos/posdemo.mp4'

export const featuredProjectInfo = {
  "ark": {
    src: arkDemo,
    title: "Cash Flow Dashboard",
    tools: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
      "Chart.js",
      "Vue",
      "Python",
      "Flask",
      "SQLite",
      "Electron"
    ],
    description:
      "A desktop app made for Build With Ark to simplify financial tracking and give users a clear view of their cash flow.",
    features: [
      "Log income and expenses with a simple guided workflow",
      "Multiple viewing modes including weekly (1-7 or Mon-Sun), monthly, and quarterly (Calendar or Retail Year)",
      "Automatic summaries of revenue, expenses, and net income",
      "Customizable transaction categories and card accounts",
      "Exportable transaction history for reports or backups",
      "Responsive, consistent, and easy-to-use interface",
    ]
  },
  "pos": {
    src: posDemo,
    title: "Point-of-Sale Application",
    tools: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
      "Vue",
      "Cypress",
      "Python",
      "Flask",
      "Pandas",
      "SQLite",
    ],
    description:
      "A desktop POS system designed for a delivery business to streamline order entry, pricing, driver assignment, and daily reporting.",
    features: [
      "Create and manage orders for various delivery types based on vehicle selection",
      "Instantly generate sales summaries and driver delivery reports",
      "Create and manage purchases (resupply) with automatic summaries",
      "Export orders, purchases, and summaries to Excel",
      "Manage users, price lists, customers, and drivers with assigned vehicles",
      "Dynamic UI that adapts to user authentication and role-based permissions",
      "15 minute AFK timer that will automatically logs out user",
      "ESC/POS thermal receipt printing support"
    ]
  }
};