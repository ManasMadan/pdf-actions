const { PDFDocument } = require("pdf-lib");

const mergePDF = async (filesDocArray) => {
  if (filesDocArray.length < 2) {
    return filesDocArray[0] || null;
  }
  const mergedPdf = await PDFDocument.create();
  for (let i = 0; i < filesDocArray.length; i++) {
    const fileDoc = filesDocArray[i];
    const pages = await mergedPdf.copyPages(fileDoc, fileDoc.getPageIndices());
    pages.forEach((page) => mergedPdf.addPage(page));
  }

  return mergedPdf;
};

module.exports = mergePDF;
