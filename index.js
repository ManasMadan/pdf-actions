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
const editMetaData = require("./pdf-methods/editMetaData");
const removeMetaData = require("./pdf-methods/removeMetaData");
const addPageNumbers = require("./pdf-methods/addPageNumbers");
const imageToPDF = require("./pdf-methods/imageToPDF");
module.exports = {
  createPDF,
  mergePDF,
  pdfArray,
  rotatePDF,
  splitPDF,
  breakPDF,
  zipToBlob,
  pdfArrayToBlob,
  flattenPDFForm,
  resizePDF,
  addMarginPDF,
  editMetaData,
  removeMetaData,
  addPageNumbers,
  imageToPDF,
};
