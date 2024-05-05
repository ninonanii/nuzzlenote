// see https://stuk.github.io/jszip/

// code below is copied from chat gpt. TODO: make a function around it for exporting notes

// Create a new instance of JSZip
var zip = new JSZip()

// Convert notesData to text format (e.g., JSON)
var notesText = JSON.stringify(notesData)

// Add text files to the zip file
zip.file('note1.txt', notesText)
zip.file('note2.txt', notesText)
// Add more files as needed

// Generate the zip file asynchronously
zip.generateAsync({ type: 'blob' }).then(function (content) {
	// Offer the zip file as a download
	saveAs(content, 'notes.zip')
})
