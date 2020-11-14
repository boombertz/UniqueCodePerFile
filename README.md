<p align="center"><img src="https://i.ibb.co/fYCMgVP/Unique-Code-Per-File-Header.jpg"></p>

<p align="center">Export a set of .PDF files with unique code per file, like a security watermark.</p><br>

---
## Overview
This script saves a sequence of files in .PDF format with a unique number code per file in all pages of the file.

In default mode, the PDF Preset is *Smallest File Size*<br>

If you want to change that, you need to edit the line #91 in the file with the name of your preset.<br>

```javascript
var myPDFExportPreset = app.pdfExportPresets.item('[Smallest File Size]');
```

Feel free to open an issue or do a pull request.