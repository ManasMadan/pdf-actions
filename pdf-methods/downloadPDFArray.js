const { saveAs } = require("file-saver");

const downloadPDFArray = (pdfArray, name) => {
  var blob = new Blob([pdfArray], { type: "application/pdf" });
  saveAs(blob, name);
};

module.exports = downloadPDFArray;
