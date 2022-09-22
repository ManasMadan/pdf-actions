const { EmptyPDFDocument } = require("./createFileDoc");
const { degrees } = require("pdf-lib");

const mergePDF = async (filesDocArray, { degree = 0 }) => {
  if (filesDocArray.length < 2) {
    return filesDocArray[0] || null;
  }
  const mergedPdf = await EmptyPDFDocument();
  for (let i = 0; i < filesDocArray.length; i++) {
    const fileDoc = filesDocArray[i];
    const pages = await mergedPdf.copyPages(fileDoc, fileDoc.getPageIndices());
    pages.forEach((page) => {
      page.setRotation(degrees(degree));
      mergedPdf.addPage(page);
    });
  }

  return mergedPdf;
};

module.exports = mergePDF;
