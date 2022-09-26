const editMetaData = (pdfDoc, options) => {
  // options = {author,title,creator,keywords,documentCreationDate,documentModificationDate,subject,producer}
  pdfDoc.setTitle(options.title);
  pdfDoc.setSubject(options.subject);
  pdfDoc.setAuthor(options.author);
  pdfDoc.setCreator(options.creator);
  pdfDoc.setProducer(options.producer);

  pdfDoc.setCreationDate(options.documentCreationDate);
  pdfDoc.setModificationDate(options.documentModificationDate);

  pdfDoc.setKeywords(options.keywords);
  return pdfDoc;
};

module.exports = editMetaData;
