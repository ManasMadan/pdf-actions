const { PageSizes, StandardFonts } = require("pdf-lib");

const marginValuesNumber = {
  Recommended: 10,
  Small: 5,
  Big: 15,
};

marginIndexPagePosition = {
  b: 3,
  t: 1,
};

const getTextPosition = (
  number,
  width,
  height,
  marginValues,
  textSize,
  pageNumberPosition,
  helveticaFont
) => {
  const text = number.toString();
  const textWidth = helveticaFont.widthOfTextAtSize(text, textSize);
  const textHeight = helveticaFont.heightAtSize(textSize);

  let textPositionX = 0,
    textPositionY = 0;

  if (pageNumberPosition[0] === "b") {
    textPositionY = (textHeight - marginValues[1] - marginValues[3]) / 2;
  }
  if (pageNumberPosition[0] === "t") {
    textPositionY =
      height - textHeight - marginValues[1] / 2 - marginValues[3] / 2;
  }

  if (pageNumberPosition[2] === "l") {
    textPositionX = textWidth * 2;
  }
  if (pageNumberPosition[2] === "c") {
    textPositionX = width / 2 - textWidth / 2;
  }
  if (pageNumberPosition[2] === "r") {
    textPositionX = width - textWidth * 2;
  }

  return { text, textPositionX, textPositionY };
};

const addPageNumbers = async (
  pdfDoc,
  pageNumberPosition = "b-c",
  margin = "Recommended",
  startFromPage = 1,
  endPage = pdfDoc.getPageCount(),
  startingNumber = 1,
  textSize = 16
) => {
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const multiplier = PageSizes["A4"][0] / 210;
  const marginValue = marginValuesNumber[margin];
  const marginValues = [0, 0, 0, 0];
  marginValues[marginIndexPagePosition[pageNumberPosition[0]]] =
    marginValue * multiplier;

  const pages = pdfDoc.getPages();

  let number = startingNumber;
  pages.slice(startFromPage - 1, endPage).forEach((page) => {
    const { x, y, width, height } = page.getMediaBox();

    const size = [width, height];
    const newSize = [width, height + marginValues[1] + marginValues[3]];
    const sizeRatio = Math.round((size[0] / size[1]) * 100);
    const newSizeRatio = Math.round((newSize[0] / newSize[1]) * 100);

    page.setSize(width, height + marginValues[1] + marginValues[3]);
    page.translateContent(x, y + marginValues[3]);

    const { text, textPositionX, textPositionY } = getTextPosition(
      number,
      width,
      height,
      marginValues,
      textSize,
      pageNumberPosition,
      helveticaFont
    );

    page.drawText(text, {
      x: textPositionX,
      y: textPositionY,
      size: textSize,
      font: helveticaFont,
    });

    if (Math.abs(sizeRatio - newSizeRatio) > 1) {
      // Change page size
      page.setSize(size[0], size[1]);
      const scale_content = Math.min(
        size[0] / newSize[0],
        size[1] / newSize[1]
      );

      // Scale content
      page.scaleContent(scale_content, scale_content);
      const scaledDiffernece = {
        width: Math.round(size[0] - scale_content * newSize[0]),
        height: Math.round(size[1] - scale_content * newSize[1]),
      };

      page.translateContent(
        Math.round(scaledDiffernece.width / 2),
        Math.round(scaledDiffernece.height / 2)
      );
    } else {
      page.scale(size[0] / newSize[0], size[1] / newSize[1]);
    }

    number++;
  });

  return pdfDoc;
};

module.exports = addPageNumbers;
