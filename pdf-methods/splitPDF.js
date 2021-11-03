const { degrees, PDFDocument } = require("pdf-lib");

const createArray = (start, stop) => {
  const res = [];
  for (let i = start; i <= stop; i++) {
    res.push(i - 1);
  }
  return res;
};

const splitPDF = async (pdfDoc, range, { degree = 0 }) => {
  if (range[0] === 0) {
    range = [1, range[1]];
  }
  if (range[1] <= range[0] || range[1] == 0) {
    return "Cannot Have Same Numbers in From and To Of Split PDF";
  }
  const splittedPDF = await PDFDocument.create();
  const pages = await splittedPDF.copyPages(pdfDoc, createArray(...range));
  pages.forEach((page) => {
    page.setRotation(degrees(degree));
    splittedPDF.addPage(page);
  });
  return splittedPDF;
};

module.exports = splitPDF;
