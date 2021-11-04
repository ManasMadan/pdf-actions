const createPDF = require("./pdf-methods/createFileDoc");
const mergePDF = require("./pdf-methods/mergePDF");
const pdfArray = require("./pdf-methods/pdfArray");
const rotatePDF = require("./pdf-methods/rotatePDF");
const splitPDF = require("./pdf-methods/splitPDF");
const zipToBlob = require("./pdf-methods/zipToBlob");
const pdfArrayToBlob = require("./pdf-methods/pdfArrayToBlob");

module.exports = {
  // createFileDoc
  createPDF,
  // MergePDF
  mergePDF,
  // PDFArray
  pdfArray,
  // RoatePDF
  rotatePDF,
  // SplitPDF
  splitPDF,
  // Zip To Blob
  zipToBlob,
  // pdfArrayToBlob,
  pdfArrayToBlob,
};
