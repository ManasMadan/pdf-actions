const { degrees } = require("pdf-lib");

const rotatePDF = async (pdfDoc, degree) => {
  const pages = pdfDoc.getPages();
  pages.forEach((page) => {
    page.setRotation(degrees(degree));
  });
  return pdfDoc;
};

module.exports = rotatePDF;
