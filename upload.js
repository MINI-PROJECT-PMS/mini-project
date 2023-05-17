// fileInput.onchange = ({target}) =>{
//     let file = target.files[0];
//     if(file){
//         let fileName = file.name;
//         uploadFile(fileName);
//     }
// }
// function uploadFile(name){
//     //let xhr = new XMLHttpRequest();
//     //xhr.open("POST", "php/upload.php");
//     xhr.upload.addEventListener("progress", ({loaded, total}) =>{
//         let fileLoader = Math.floor((loaded / total) * 100);
//         let fileTotal = Math.floor(total / 1000);
//         let progressHTML = `<li class="row">
//                                 <i class="fas fa-file-alt"></i>
//                                 <div class="content">
//                                 <div class="details">
//                                     <span class="name">${name} . Uploading</span>
//                                     <span class="percent">${fileLoader}%</span>
//                                 </div>
//                                 <div class="progress-bar">
//                                     <div class="progress" style="width: ${fileLoader}></div>
//                                 </div>
//                                 </div>
//                             </li>`;
//         progressArea.innerHTML = progressHTML;                    
//     });
//     let formData = new FormData(form);
//     xhr.send(formData);
// }

















'use strict'
const firebaseConfig = {
    apiKey: "AIzaSyDdd7UW2GNXvqpRQscncr3-qSJYUF2vol8",
    authDomain: "fir-contact-1d5b7.firebaseapp.com",
    databaseURL: "https://fir-contact-1d5b7-default-rtdb.firebaseio.com",
    projectId: "fir-contact-1d5b7",
    storageBucket: "fir-contact-1d5b7.appspot.com",
    messagingSenderId: "627912418444",
    appId: "1:627912418444:web:030949dc32f53dce3387a9",
    measurementId: "G-HB0N75P5ML"
  };
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase

// Get a reference to the Firebase Storage service




  var storage = firebase.storage();
  var storageRef = storage.ref();
  function uploadPdf() {
    // Get the file
    var file = document.getElementById("pdf-file").files[0];
  
    // Create a storage reference
    var storageRef = firebase.storage().ref();
  
    // Upload the file to Firebase Storage
    var pdfRef = storageRef.child(file.name);
    pdfRef.put(file).then(function(snapshot) {
      console.log("PDF uploaded successfully!");
    });
  }

  document.querySelector('.btn').addEventListener('click',function(){
  var storageRef = firebase.storage().ref();

  storageRef.listAll().then(function(result) {
    result.items.forEach(function(item) {
      if (item.name.endsWith('.pdf')) {
        displayPdf(item);
      }
    });
  }).catch(function(error) {
    console.log(error);
  });
  function displayPdf(item) {
    item.getDownloadURL().then(function(url) {
      var link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.innerHTML = item.name;
      console.log(item.name);
      if(`${localStorage.getItem("name")}.pdf`==item.name)document.getElementById('pdf-container').appendChild(link);
      
    }).catch(function(error) {
      console.log(error);
    });
  }
})