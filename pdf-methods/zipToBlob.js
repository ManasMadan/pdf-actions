const zipToBlob = async (zip) =>
  await zip.generateAsync({ type: "blob" }).then((content) => content);

export default zipToBlob;
