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
  const detail=[];
  const user_database=firebase.database().ref(" user databasestore");
  const faculty_database=firebase.database().ref("faculty databasestore");

  user_database.on("value",function(snapshot){
  snapshot.forEach(function(element){
    var a=element.val();
  detail.push(a);
  });
  });
  const gender=function(){
    var selectgender = document.querySelector("#gender");
   var selectedgenderValue = selectgender.options[selectgender.selectedIndex].value;
   return selectedgenderValue;
  }
  const degree=function(){
    var selectElement = document.querySelector("#degree");
   var selectedOptionValue = selectElement.options[selectElement.selectedIndex].value;
   return selectedOptionValue;
  }
 document.querySelector('.sumbit').addEventListener('click',function(){
    let c=0;
    for(let i=0;i<detail.length;i++){
        if(detail[i].register_no==document.querySelector('#Reg').value){
            c++;
         alert('Already Register Number exist');
         return;
        }
        else if(detail[i].useremail==document.querySelector('#email').value) {
            c++;
            alert('Already email exist');
            return;
        }
        else {
        if (detail[i].userpassword==document.querySelector('#password').value){
            c++;
            alert('Already password exist');
            return;
        }
        }
        }
        if(c==0){
            let registration_box=document.querySelector(".registration-box");
            let col=document.querySelector('#Reg');
            if(document.querySelector('#Reg').value=="") alert('Register.No field is empty');
            else if(document.querySelector('#name').value=="") alert('UserName field is empty');
            else if(document.querySelector('#email').value=="") alert('Useremail field is empty');
            else if(document.querySelector('#password').value=="") alert('Userpassword field is empty');
            else if(document.querySelector('#dob').value=="") alert('Date of Brith field is empty');
            else if(document.querySelector('#email').value=="") alert('Useremail field is empty');
            else if(degree()=="") alert('UserDegree field is empty');
            else if(gender()=="") alert('usergender field is empty');
            else if(document.querySelector('.dep')){
                if(document.querySelector('.dep').checked) console.log(document.querySelector('input[name="dep"]:checked').value);
                else alert('userdepartment field is empty');
            }
            else if(document.querySelector('#address').value=="") alert('useraddress field is empty');
            else{ 
           var push=user_database.push();
            push.set({
                register_no:document.querySelector('#Reg').value,
                username:document.querySelector('#name').value,
                useremail:document.querySelector('#email').value,
                userpassword:document.querySelector('#password').value,
                user_date:document.querySelector('#dob').value,
                user_gender:gender(),
                user_degree:degree(),
                user_dep:document.querySelector('input[name="dep"]:checked').value,
                user_address:document.querySelector('#address').value
            })
        }
            // alert('successfully logined');
        }
        // console.log(detail);
});
//     console.log(document.querySelector('input[name="dep"]:checked').value);
//     // console.log(document.querySelector("#degree").textContent);
 
//    console.log(selectedOptionValue);
 
// // })
