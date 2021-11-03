const { PDFDocument } = require("pdf-lib");
const pdfArray = require("./pdfArray");

const EmptyPDFDocument = async () => await PDFDocument.create();

const PDFDocumentFromFile = async (file) =>
  await PDFDocument.load(await pdfArray(file), {
    ignoreEncryption: true,
  });

const PDFDocumentFromPDFArray = async (fileArray) =>
  await PDFDocument.load(fileArray, { ignoreEncryption: true });

module.exports = {
  EmptyPDFDocument,
  PDFDocumentFromFile,
  PDFDocumentFromPDFArray,
};
