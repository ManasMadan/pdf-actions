const flattenPDFForm = async (pdfDoc) => {
  const form = pdfDoc.getForm();
  form.flatten();
  return form.doc;
};

module.exports = flattenPDFForm;
