const { XLSXPreparer } = require("../index");
const mp = XLSXPreparer.generateFileMonthlyPlanPurchase({
  basicId: "@598hfsgr",
  maxLimitAdditional: 1500,
  limitAdditional: 1500,
  details: "202000336"
});

const id = XLSXPreparer.generateFilePremiumIdPurchase({
  basicId: "@598hfsgr",
  premiumId: "superpremium",
  details: { invoice: "ID" }
});

XLSXPreparer.write(id, "200212.add.598hfsgr.1500.xlsx");
