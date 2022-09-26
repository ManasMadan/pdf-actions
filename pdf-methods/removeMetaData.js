const removeMetaData = (pdfDoc) => {
  pdfDoc.setTitle("");
  pdfDoc.setSubject("");
  pdfDoc.setAuthor("");
  pdfDoc.setCreator("");
  pdfDoc.setProducer("");

  pdfDoc.setCreationDate(new Date());
  pdfDoc.setModificationDate(new Date());

  pdfDoc.setKeywords([]);
  return pdfDoc;
};

module.exports = removeMetaData;
