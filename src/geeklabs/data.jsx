const filters_data = {
  industry: [
    [
      { icon: "public/task/filters/icon1.svg", label: "Helath Care" },
      { icon: "public/task/filters/icon1.svg", label: "Materials" },
      { icon: "public/task/filters/icon1.svg", label: "Energy" },
      {
        icon: "public/task/filters/icon1.svg",
        label: "Consumer Discretionary",
      },
      { icon: "public/task/filters/icon1.svg", label: "Consumer Staples" },
      { icon: "public/task/filters/icon1.svg", label: "Real Estate" },
    ],
    [
      { icon: "public/task/filters/icon1.svg", label: "IT" },
      { icon: "public/task/filters/icon1.svg", label: "Communication" },
      { icon: "public/task/filters/icon1.svg", label: "Industials" },
      { icon: "public/task/filters/icon1.svg", label: "Utilities" },
      { icon: "public/task/filters/icon1.svg", label: "Financials" },
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
  { icon: "public/task/side bar/alerts.svg", label: "alerts", available: true },
  {
    icon: "public/task/side bar/training.svg",
    label: "training",
    available: true,
  },
  {
    icon: "public/task/side bar/automation.svg",
    label: "automation",
    available: false,
  },
  {
    icon: "public/task/side bar/portfolio.svg",
    label: "portfolio",
    available: false,
  },
  {
    icon: "public/task/side bar/trading.svg",
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
