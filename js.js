"use strict";
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
  const detail=[];
  const user_database=firebase.database().ref(" user databasestore");
  const faculty_database=firebase.database().ref("faculty databasestore");

  user_database.on("value",function(snapshot){
  snapshot.forEach(function(element){
    var a=element.val();
  detail.push(a);
  });
  });
const login=document.querySelector('.stud');
const login1=document.querySelector('.login');
document.querySelector('#click').addEventListener('click',function()
{
    login1.classList.remove('hidden');
})
const body =document.querySelector('.close1');
body.addEventListener('click',function()
{
    login1.classList.add('hidden');    
})
document.querySelector('#log').addEventListener('click',function(){
    let c1=0;
    console.log(Role());
//     console.log('hi');
if(Role()=="stud"){
    for(let i=0;i<detail.length;i++){
    if(detail[i].register_no==document.querySelector('#Uname').value){
      if (detail[i].userpassword==document.querySelector('#Pass').value){
        c1=1;
      }
}
    }
if(c1==1)
{
    window.location.replace('student.html');
}
else 
{
    document.querySelector('#Uname').value = "";
    login1.classList.add('hidden');
    alert('wrong password');
}
}
else{
  alert("user wrong");
}
  })
  const Role=function(){
    var selectElement = document.querySelector("#role");
   var selectedOptionValue = selectElement.options[selectElement.selectedIndex].value;
   return selectedOptionValue;
  }