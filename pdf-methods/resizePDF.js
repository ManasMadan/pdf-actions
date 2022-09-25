const { degrees, PageSizes } = require("pdf-lib");

const resizePDF = async (
  pdfDoc,
  size = "A4",
  orientation = "Portrait",
  position = "Start",
  degree = 0
) => {
  const pages = pdfDoc.getPages();
  const newSize = PageSizes[size];
  if (orientation === "Landscape") {
    newSize.reverse();
  }
  const newSizeRatio = Math.round((newSize[0] / newSize[1]) * 100);

  pages.forEach((page) => {
    const { width, height } = page.getMediaBox();
    const sizeRatio = Math.round((width / height) * 100);

    if (Math.abs(newSizeRatio - sizeRatio) > 1) {
      // Change page size
      page.setSize(newSize[0], newSize[1]);
      const scale_content = Math.min(newSize[0] / width, newSize[1] / height);

      // Scale content
      page.scaleContent(scale_content, scale_content);
      const scaledDiffernece = {
        width: Math.round(newSize[0] - scale_content * width),
        height: Math.round(newSize[1] - scale_content * height),
      };

      if (position == "Center") {
        page.translateContent(
          Math.round(scaledDiffernece.width / 2),
          Math.round(scaledDiffernece.height / 2)
        );
      } else if (position == "End") {
        page.translateContent(
          Math.round(scaledDiffernece.width),
          Math.round(scaledDiffernece.height)
        );
      }
    } else {
      page.scale(newSize[0] / width, newSize[1] / height);
    }

    page.setRotation(degrees(degree));
  });
  return pdfDoc;
};

module.exports = resizePDF;
