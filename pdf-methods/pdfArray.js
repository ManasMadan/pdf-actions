const pdfArray = async (file) => {
  if (typeof file === Uint8Array) {
    return file;
  }
  const fileURL = URL.createObjectURL(file);
  const data = await fetch(fileURL);
  const fileArray = await data.arrayBuffer();
  return fileArray;
};

module.exports = pdfArray;
