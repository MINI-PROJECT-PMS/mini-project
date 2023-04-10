"use strict";
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