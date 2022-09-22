const { degrees } = require("pdf-lib");
const { EmptyPDFDocument } = require("./createFileDoc");

const createArray = (start, stop) => {
  const res = [];
  for (let i = start; i <= stop; i++) {
    res.push(i - 1);
  }
  return res;
};

const splitPDF = async (pdfDoc, range, degree = 0) => {
  if (range[0] === 0) {
    range = [1, range[1]];
  }
  if (range[1] === 0) {
    range = [range[0], 1];
  }
  if (range[1] < range[0]) {
    range = [range[1], range[0]];
  }
  if (range[1] > pdfDoc.getPageCount()) {
    range = [range[0], pdfDoc.getPageCount()];
  }
  const splittedPDF = await EmptyPDFDocument();
  const pages = await splittedPDF.copyPages(pdfDoc, createArray(...range));
  pages.forEach((page) => {
    page.setRotation(degrees(degree));
    splittedPDF.addPage(page);
  });
  return splittedPDF;
};

module.exports = splitPDF;
