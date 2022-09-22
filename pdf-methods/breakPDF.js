const splitPDF = require("./splitPDF");

const createBreakPDFArray = (pdfPages, maxPages, lastPDF) => {
  let lastInsertedPage = 1;

  const pagesArray = [];

  for (let i = 0; i < ~~(pdfPages / maxPages); i++) {
    const breakPdfPagesIndices = [
      lastInsertedPage,
      lastInsertedPage + maxPages - 1,
    ];
    lastInsertedPage += maxPages;
    pagesArray.push(breakPdfPagesIndices);
  }

  if (lastPDF && pdfPages % maxPages) {
    pagesArray.push([lastInsertedPage, pdfPages]);
  }

  return pagesArray;
};

const breakPDF = async (
  pdfDoc,
  maxPages,
  lastPDF,
  degree = 0,
  breakRange = [1, pdfDoc.getPageCount()]
) => {
  const newPdfDoc = await splitPDF(pdfDoc, breakRange, degree);
  const pdfPages = newPdfDoc.getPageCount();

  if (maxPages > pdfPages) {
    return "maxPages greater than total number of pages";
  }

  const pdfDocArrays = [];

  const breakPdfPagesIndices = createBreakPDFArray(pdfPages, maxPages, lastPDF);

  for (let i = 0; i < breakPdfPagesIndices.length; i++) {
    const breakPdfDoc = await splitPDF(
      newPdfDoc,
      breakPdfPagesIndices[i],
      degree
    );
    pdfDocArrays.push(breakPdfDoc);
  }

  return pdfDocArrays;
};

module.exports = breakPDF;
