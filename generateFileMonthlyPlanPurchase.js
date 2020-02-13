const generateFile = require("./generateFile");
const HEADERS = [
  "Basic ID",
  "Additional message limit",
  "Additional message limit maximum"
];
const WORKSHEET = "ID";

const prepareSingleRow = row => {
  if (!row.basicId) throw Error("basicId is required.");

  const limitAdditional = row.limitAdditional || 0;
  const maxLimitAdditional = row.maxLimitAdditional || 0;

  return [
    row.basicId,
    limitAdditional,
    maxLimitAdditional,
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
  return generateFile(generateData(data), HEADERS, WORKSHEET);
};
