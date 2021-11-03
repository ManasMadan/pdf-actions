import {
  EmptyPDFDocument,
  PDFDocumentFromFile,
  PDFDocumentFromPDFArray,
} from "./pdf-methods/createFileDoc";
import downloadPDFArray from "./pdf-methods/downloadPDFArray";
import mergePDF from "./pdf-methods/mergePDF";
import pdfArray from "./pdf-methods/pdfArray";
import rotatePDF from "./pdf-methods/rotatePDF";
import splitPDF from "./pdf-methods/splitPDF";
import zipToBlob from "./pdf-methods/zipToBlob";

import saveAs from "file-saver";
import JSZip from "jszip";

export {
  // createFileDoc
  EmptyPDFDocument,
  PDFDocumentFromFile,
  PDFDocumentFromPDFArray,
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
