<div align="center">
  <strong>Create and modify PDF documents in any JavaScript environment.</strong>
</div>
<div align="center">
  Designed to work in any modern JavaScript runtime. Tested in Node, Browser, Deno, and React Native environments.
</div>

<br />
<div align="center">
  <!-- NPM Version -->
  <a href="https://www.npmjs.com/package/pdf-actions">
    <img
      src="https://img.shields.io/npm/v/pdf-actions.svg?style=flat-square"
      alt="NPM Version"
    />
  </a>
</div>

<br />

## Table of Contents

- [Features](#features)
- [Usage Examples](#usage-examples)
- [Installation](#installation)
- [Documentation](#documentation)
- [License](#license)

## Features

- Modify existing PDFs
- Merge PDFs
- Rotate PDFs
- Split PDFs
- Download PDFs
- Create ZIP File Of PDFs Processed

## Usage Examples

- A Project Made Using pdf-actions is [PDFActions](https://pdfactions.vercel.app/) : [GITHUB Repo](https://github.com/ManasMadan/PDFActions)

### Merge PDFs

<!-- prettier-ignore -->
```js
// Importing The Required Modules
import { createPDF, downloadPDFArray, mergePDF } from "pdf-actions";

// Async Function To Merge PDF Files Uploaded Using The Input Tag in HTML
const mergePDFHandler = async (files) => {
  // Converting File Object Array To PDF Document Array
  files.forEach((file)=>await createPDF.PDFDocumentFromFile(file))
  // Merging The PDF Files to A PDFDocument
  const mergedPDFDocument = await mergePDF(files)
  // Converting The Merged Document to Unit8Array
  const mergedPdfFile = await mergedPDFDocument.save();
  // Saving The File To Disk
  downloadPDFArray(mergedPdfFile, "merged.pdf");
};
```

### Rotate PDFs

<!-- prettier-ignore -->
```js
// Importing The Required Modules
import { createPDF, rotatePDF, zipToBlob,saveAs } from "pdf-actions";

// Async Function To Rotate PDF Files Uploaded Using The Input Tag in HTML
const rotatePDFHandler = async (files) => {
  // Creating A JSZip Instance 
  const zip = new JSZip();
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const pdfDoc = await createPDF.PDFDocumentFromFile(file);
    const rotatedPDF = await rotatePDF(pdfDoc, file.degrees); // file.degrees is not by default
    zip.file(
      `rotated-${file.name}`,
      await rotatedPDF.save() // Converting To Unit8Array
    );
  }
  saveAs(await zipToBlob(zip), "rotatedPDFFiles.zip");
};
```

### Split PDFs

<!-- prettier-ignore -->
```js
// Importing The Required Modules
import { createPDF, splitPDF, JSZip } from "pdf-actions";

// Async Function To Split PDF Files Uploaded Using The Input Tag in HTML
const splitPDFHandler = async (files) => {
  // Creating A JSZip Instance 
  const zip = new JSZip();
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const pdfFile = await createPDF.PDFDocumentFromFile(file);
    // Optional degree argument Default : 0
    const splitPDF = await splitPDF(pdfFile, file.range, {
        degree: file.degrees,
    }
    const pdfFile = await splitPDF.save();
    zip.file(`split-${file.name}`, pdfFile);
  }
  await zip.generateAsync({ type: "blob" }).then(function (content) {
    saveAs(content, "splitPDFFiles.zip");
  });
};
```

## Installation

### NPM Module

To install the latest stable version:

- With npm

```bash
npm install --save pdf-actions
```

- With yarn

```bash
yarn add pdf-actions
```

This assumes you're using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/) as your package manager.

## Documentation

The repo for the project site (and generated documentation files) is
located here: https://github.com/ManasMadan/pdf-actions

## License

[MIT](LICENSE.md)
