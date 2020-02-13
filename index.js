const XLSX = require("xlsx");
const generateFilePremiumIdPurchase = require("./generateFilePremiumIdPurchase");
const generateFileMonthlyPlanPurchase = require("./generateFileMonthlyPlanPurchase");

const write = (wb, filename) => {
  if (filename) {
    XLSX.writeFile(wb, filename);
  }
};

const XLSXPreparer = {
  generateFileMonthlyPlanPurchase,
  generateFilePremiumIdPurchase,
  write
};

module.exports = {
  XLSXPreparer
};
