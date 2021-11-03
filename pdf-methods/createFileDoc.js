import { PDFDocument } from "pdf-lib";
import pdfArray from "./pdfArray";

const EmptyPDFDocument = async () => await PDFDocument.create();

const PDFDocumentFromFile = async (file) =>
  await PDFDocument.load(await pdfArray(file), {
    ignoreEncryption: true,
  });

const PDFDocumentFromPDFArray = async (fileArray) =>
  await PDFDocument.load(fileArray, { ignoreEncryption: true });

export default {
  EmptyPDFDocument,
  PDFDocumentFromFile,
  PDFDocumentFromPDFArray,
};
