const { degrees, PageSizes } = require("pdf-lib");

const addMarginPDF = async (pdfDoc, marginMillimeter, degree = 0) => {
  const pages = pdfDoc.getPages();
  const multiplier = PageSizes["A4"][0] / 210;
  const margin = [
    marginMillimeter[0] * multiplier, // Left
    marginMillimeter[1] * multiplier, // Top
    marginMillimeter[2] * multiplier, // Right
    marginMillimeter[3] * multiplier, // Bottom
  ];

  pages.forEach((page) => {
    const { x, y, width, height } = page.getMediaBox();

    const size = [width, height];
    const newSize = [
      width + margin[2] + margin[0],
      height + margin[1] + margin[3],
    ];
    const sizeRatio = Math.round((size[0] / size[1]) * 100);
    const newSizeRatio = Math.round((newSize[0] / newSize[1]) * 100);

    page.setSize(width + margin[2] + margin[0], height + margin[1] + margin[3]);
    page.translateContent(x + margin[0], y + margin[3]);

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

    page.setRotation(degrees(degree));
  });

  return pdfDoc;
};

module.exports = addMarginPDF;
