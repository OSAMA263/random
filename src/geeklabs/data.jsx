const filters_data = {
  industry: [
    [
      { icon: "task/filters/icon1.svg", label: "Helath Care" },
      { icon: "task/filters/icon1.svg", label: "Materials" },
      { icon: "task/filters/icon1.svg", label: "Energy" },
      {
        icon: "task/filters/icon1.svg",
        label: "Consumer Discretionary",
      },
      { icon: "task/filters/icon1.svg", label: "Consumer Staples" },
      { icon: "task/filters/icon1.svg", label: "Real Estate" },
    ],
    [
      { icon: "task/filters/icon1.svg", label: "IT" },
      { icon: "task/filters/icon1.svg", label: "Communication" },
      { icon: "task/filters/icon1.svg", label: "Industials" },
      { icon: "task/filters/icon1.svg", label: "Utilities" },
      { icon: "task/filters/icon1.svg", label: "Financials" },
    ],
  ],
  radio: [
    ["Micro", "Small", "Large"],
    ["Low Risk", "Mid Risk", "High Risk"],
  ],
  roll: [
    ["Big Option Buys", "Merger Arbitrage", "Short Reports"],
    ["Stocks", "Options", "Futures"],
  ],
};
const sidebar_data = [
  { icon: "task/side bar/alerts.svg", label: "alerts", available: true },
  {
    icon: "task/side bar/training.svg",
    label: "training",
    available: true,
  },
  {
    icon: "task/side bar/automation.svg",
    label: "automation",
    available: false,
  },
  {
    icon: "task/side bar/portfolio.svg",
    label: "portfolio",
    available: false,
  },
  {
    icon: "task/side bar/trading.svg",
    label: "trading",
    available: false,
  },
];
const table_data = [
  {
    company: "tsla",
    views: 200,
    marketCap: 0.69,
    risk: "Low Risk",
  },
  {
    company: "amzn",
    views: 200,
    marketCap: -0.69,
    risk: "High Risk",
  },
];
export { filters_data, sidebar_data, table_data };
