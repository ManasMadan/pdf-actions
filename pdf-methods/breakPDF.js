const splitPDF = require("./splitPDF");

const createBreakPDFArray = (pdfPages, maxPages, lastPDF) => {
  let lastInsertedPage = 1;

  const pagesArray = [];

  for (let i = 0; i < ~~(pdfPages / maxPages); i++) {
    const breakPdfPagesIndices = [];
    for (let j = 0; j < maxPages; j++) {
      breakPdfPagesIndices.push(lastInsertedPage);
      lastInsertedPage++;
    }
    pagesArray.push(breakPdfPagesIndices);
  }

  if (lastPDF && pdfPages % maxPages) {
    const breakPdfPagesIndices = [];
    for (let j = 0; j < pdfPages % maxPages; j++) {
      breakPdfPagesIndices.push(lastInsertedPage);
      lastInsertedPage++;
    }
    pagesArray.push(breakPdfPagesIndices);
  }

  return pagesArray;
};

const breakPDF = async (
  pdfDoc,
  maxPages,
  breakRange = [1, pdfDoc.getPageCount()],
  lastPDF = true,
  { degree = 0 }
) => {
  if (maxPages > pages) {
    return "maxPages greater than total number of pages";
  }

  const pdfDocArrays = [];
  const splittedPdfDoc = await splitPDF(pdfDoc, breakRange, { degree: degree });

  const breakPdfPagesIndices = createBreakPDFArray(
    breakRange[1] - breakRange[0] + 1,
    maxPages,
    lastPDF
  );

  for (let i = 0; i < breakPdfPagesIndices.length; i++) {
    const breakPdfDoc = await splitPDF(splittedPdfDoc, breakPdfPagesIndices[i]);
    pdfDocArrays.push(breakPdfDoc);
  }

  return pdfDocArrays;
};

module.exports = breakPDF;
