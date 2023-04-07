"use strict";
const nav=document.querySelector('.select');
const login=document.querySelector('.stud');
const falogin=document.querySelector('.faculty');
const login1=document.querySelector('.login');
const login2=document.querySelector('.falogin');
nav.addEventListener('click',function(e)
{
    console.log(e.target);
    
    if(e.target.classList.contains('stud'))
    {
        login2.classList.add('hidden');
     login1.classList.remove('hidden');
    }
    if(e.target.classList.contains('faculty'))
    {
        login1.classList.add('hidden');
     login2.classList.remove('hidden');
    }
})
const body =document.querySelector('.close1');
body.addEventListener('click',function(e){
console.log(e.target)
    login2.classList.add('hidden');
    login1.classList.add('hidden');
    console.log("hi");
    
})

const body1 =document.querySelector('.close2');
body1.addEventListener('click',function(){
    login2.classList.add('hidden');
    login1.classList.add('hidden');
    console.log("hi");
    
})
