main();

function main() { 
	mySetup();
}

function mySetup() {
	//Set the open file
	var myDocument = app.activeDocument;

	//Set the master spread
	var myMasterSpread = myDocument.masterSpreads.item("A-Master");



	try {
		myMasterSpread.name;
	}
	catch(myError) {
		//If doesn't exist, create the master spread
		myMasterSpread = myDocument.masterSpreads.add({name:"A-Master"});
	}

	try {
		myColorB = myDocument.colors.item("CodeColor");
		//If the color does not exist, trying to get its name will generate an error.
		myName = myColorB.name;
	}
	catch (myError) {
		//The color style did not exist, so create it.
		myColorB = myDocument.colors.add({name:"CodeColor", model:ColorModel.process, colorValue:[0, 0, 0, 1]}); 
	}

		//Create a dialog
		var dlg = new Window('dialog', "Unique Code Generator");  
	      
	    dlg.panel = dlg.add('panel', undefined, "Insert the total of files");  
	    dlg.panel.alignChildren = "fill";  
	    dlg.panel_text1 = dlg.panel.add('edittext', undefined, "");  
	    dlg.panel = dlg.add('button', undefined, 'OK');
	    dlg.panel = dlg.add('button', undefined, 'Cancel');
	  	
	    dlg.show();

		var CurrentFile = 1;
		var TotalFiles = dlg.panel_text1.text;
		var NumberSerie = "001";

		while(CurrentFile <= TotalFiles) {
			for (var x = 0;x <= 979;x++) {
				if (CurrentFile < 10) {
					NumberSerie = NumberSerie + "00" + CurrentFile + " ";
				}
				else {
					NumberSerie = NumberSerie + "0" + CurrentFile + " ";
				}
			}

			var codeArea = myMasterSpread.textFrames.add({geometricBounds:[0,0,297, 420], contents: "" + NumberSerie});
			var codeText = codeArea.parentStory.paragraphs.item(0);

			codeText.appliedFont = app.fonts.item("Avenir Next");
			codeText.pointSize = 20;
			codeText.fontStyle = "Demi Bold"
			codeText.fillColor = myColorB;

			mySnippet(CurrentFile);

			CurrentFile++;
			NumberSerie = "";
			codeText.remove();

		}

		

		}

	function mySnippet(number) {

	//Get the file name
	var myDocument = app.activeDocument;

	//Clear the .indd in the name of file
	var myNewName = myDocument.name.replace(".indd","");

	//Insert the number in the file name
	var finalName = myNewName + "_" + number

	//Set the smallest file size
	var myPDFExportPreset = app.pdfExportPresets.item('[Smallest File Size]');

	app.activeDocument.exportFile(ExportFormat.pdfType, File(Folder.desktop + "/" + finalName + ".pdf"), false, myPDFExportPreset);
}