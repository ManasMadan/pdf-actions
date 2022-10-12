const { PageSizes, degrees } = require("pdf-lib");
const { EmptyPDFDocument } = require("./createFileDoc");
const addMarginPDF = require("./addMarginPDF");
const imageToPDF = async (
  image,
  pageSize = "Same as Image",
  pageOrientation = "Portrait",
  imagePosition = "Start",
  degree = 0,
  marginMillimeter = [0, 0, 0, 0]
) => {
  let pdfDoc = await EmptyPDFDocument();
  const embeddedImage = await pdfDoc.embedJpg(image);

  let pageSizeArray;
  if (pageSize == "Same as Image") {
    pageSizeArray = [embeddedImage.width, embeddedImage.height];
  } else {
    pageSizeArray = PageSizes[pageSize];
  }
  if (pageOrientation == "Landscape") {
    pageSizeArray.reverse();
  }

  const imageDims = embeddedImage.scale(
    Math.min(
      pageSizeArray[0] / embeddedImage.width,
      pageSizeArray[1] / embeddedImage.height
    )
  );

  let imageY;
  if (imagePosition == "Start") {
    imageY = pageSizeArray[1] - imageDims.height;
  } else if (imagePosition == "Center") {
    imageY = pageSizeArray[1] / 2 - imageDims.height / 2;
  } else if (imagePosition == "End") {
    imageY = 0;
  }

  const pdfPage = pdfDoc.addPage(pageSizeArray);
  pdfPage.drawImage(embeddedImage, {
    x: 0,
    y: imageY,
    width: imageDims.width,
    height: imageDims.height,
  });

  pdfDoc = await addMarginPDF(pdfDoc, marginMillimeter, degree);
  return pdfDoc;
};

module.exports = imageToPDF;
