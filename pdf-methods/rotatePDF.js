import { degrees } from "pdf-lib";

export const rotatePDF = async (pdfDoc, degree) => {
  const pages = pdfDoc.getPages();
  pages.forEach((page) => {
    page.setRotation(degrees(degree));
  });
  return pdfDoc;
};

export default rotatePDF;
