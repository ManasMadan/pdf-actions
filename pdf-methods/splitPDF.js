import { degrees, PDFDocument } from "pdf-lib";

const createArray = (start, stop) => {
  const res = [];
  for (let i = start; i <= stop; i++) {
    res.push(i - 1);
  }
  return res;
};

const splitPDF = async (pdfDoc, range, degree) => {
  const splittedPDF = await PDFDocument.create();
  const pages = await splittedPDF.copyPages(pdfDoc, createArray(...range));
  pages.forEach((page) => {
    page.setRotation(degrees(degree));
    splittedPDF.addPage(page);
  });
  return splittedPDF;
};

export default splitPDF;
