const fs = require('fs')

function setupSignatureBox(){

  var canvas = document.getElementById('canvasAssinatura')
  var signaturePad = new SignaturePad(canvas);

  // Min line stroke
  signaturePad.minWidth = 2;
  // Max line stroke
  signaturePad.maxWidth = 2;
  // Color line
  signaturePad.penColor = "rgb(0, 0, 0)"; 

  var saveButton = document.getElementById('buttonSave');
  var clearButton = document.getElementById('buttonClear');
  
  saveButton.addEventListener('click', function (event) {
    // Image in base64 format
    var base64String = signaturePad.toDataURL('image/png');
    var base64Image = base64String.split(",").pop();

    saveImageFile(base64Image)
  });
  
  clearButton.addEventListener('click', function (event) {
    // Clears the signature
    signaturePad.clear();
  });

}

function saveImageFile(base64Image){
  // Converts the base64 to png
  fs.writeFile("./imagem.png", base64Image, {encoding: 'base64'}, function(err) {
    if(err) {
        console.log(err);
    } else {
        closeWindow()
    }
  });

}

function closeWindow(){
  const remote = require('electron').remote
  let window = remote.getCurrentWindow()
  window.close()
}

document.addEventListener("DOMContentLoaded", setupSignatureBox)
