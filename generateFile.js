const XLSX = require("xlsx");
module.exports = (data, headers, sheetName, middlewares = []) => {
  const wb = XLSX.utils.book_new();

  let sheetData = [];
  sheetData.push(headers);

  if (middlewares && middlewares.length > 0) {
    middlewares.forEach(fn => {
      data = data.map(d => {
        if (Array.isArray(d)) {
          return d.map(r => fn(r));
        } else {
          return fn(d);
        }
      });
    });
  }

  if (Array.isArray(data) && data.length > 0 && Array.isArray(data[0])) {
    data.forEach(row => sheetData.push(row));
  } else if (data) {
    sheetData.push(data);
  } else {
    throw Error("data is required.");
  }
  const ws = XLSX.utils.aoa_to_sheet(sheetData);
  XLSX.utils.book_append_sheet(wb, ws, sheetName);
  return wb;
};
