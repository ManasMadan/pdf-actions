const createPDF = require("./pdf-methods/createFileDoc");
const mergePDF = require("./pdf-methods/mergePDF");
const pdfArray = require("./pdf-methods/pdfArray");
const rotatePDF = require("./pdf-methods/rotatePDF");
const splitPDF = require("./pdf-methods/splitPDF");
const breakPDF = require("./pdf-methods/breakPDF");
const zipToBlob = require("./pdf-methods/zipToBlob");
const pdfArrayToBlob = require("./pdf-methods/pdfArrayToBlob");
const flattenPDFForm = require("./pdf-methods/flattenPDFForm");
const resizePDF = require("./pdf-methods/resizePDF");
const addMarginPDF = require("./pdf-methods/addMarginPDF.js");
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
  // Break PDF
  breakPDF,
  // Zip To Blob
  zipToBlob,
  // pdfArrayToBlob,
  pdfArrayToBlob,
  //flattenPDFForm
  flattenPDFForm,
  // resizePDF
  resizePDF,
  // addMarginPDF
  addMarginPDF,
};
