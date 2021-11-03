const createPDF = require("./pdf-methods/createFileDoc");
const downloadPDFArray = require("./pdf-methods/downloadPDFArray");
const mergePDF = require("./pdf-methods/mergePDF");
const pdfArray = require("./pdf-methods/pdfArray");
const rotatePDF = require("./pdf-methods/rotatePDF");
const splitPDF = require("./pdf-methods/splitPDF");
const zipToBlob = require("./pdf-methods/zipToBlob");

const saveAs = require("file-saver");
const JSZip = require("jszip");

module.exports = {
  // createFileDoc
  createPDF,
  // DownloadPDFArray
  downloadPDFArray,
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
  // Some Useful Exports
  saveAs,
  JSZip,
};
