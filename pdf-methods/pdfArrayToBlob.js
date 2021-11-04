const pdfArrayToBlob = (pdfArray) => {
  const blob = new Blob([pdfArray], { type: "application/pdf" });
  return blob;
};

module.exports = pdfArrayToBlob;
