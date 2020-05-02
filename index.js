const XLSX = require("xlsx");
const generateFile = require("./generateFile");
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
  generateFile,
  write,
};

module.exports = {
  XLSXPreparer,
};
