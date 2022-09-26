const { degrees, PageSizes } = require("pdf-lib");

const addMarginPDF = async (pdfDoc, marginMillimeter, degree = 0) => {
  const pages = pdfDoc.getPages();
  const multiplier = PageSizes["A4"][0] / 210;
  const margin = [
    marginMillimeter[0] * multiplier, // Left
    marginMillimeter[1] * multiplier, // Top
    marginMillimeter[2] * multiplier, // Right
    marginMillimeter[3] * multiplier, // Bottom
  ];

  pages.forEach((page) => {
    const { x, y, width, height } = page.getMediaBox();

    page.setSize(width + margin[0] + margin[2], height + margin[1] + margin[3]);
    page.translateContent(x + margin[0], y + margin[1]);
    page.setRotation(degrees(degree));
  });

  return pdfDoc;
};

module.exports = addMarginPDF;
