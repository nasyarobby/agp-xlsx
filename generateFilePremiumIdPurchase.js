const generateFile = require("./generateFile");
const HEADERS = ["Basic ID", "Premium ID"];
const WORKSHEET = "ID";

const prepareSingleRow = row => {
  if (!row.basicId) throw Error("basicId is required.");

  if (!row.premiumId) throw Error("premiumId is required.");

  return [
    row.basicId,
    row.premiumId,
    row.details ? JSON.stringify(row.details) : ""
  ];
};

const generateData = data => {
  if (Array.isArray(data)) {
    return data.map(d => prepareSingleRow(d));
  } else {
    return prepareSingleRow(data);
  }
};

module.exports = data => {
  return generateFile(generateData(data), HEADERS, WORKSHEET, [
    require("./cleaner").stripAtSign
  ]);
};
