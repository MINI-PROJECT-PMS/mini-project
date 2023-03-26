'use strict'
document.querySelector('.stud').addEventListener('click',function(){
    document.querySelector('.fa').classList.add('hidden');
    document.querySelector('.st').classList.remove('hidden');
    
})
document.querySelector('.faculty').addEventListener('click',function(){
    document.querySelector('.st').classList.add('hidden');
    document.querySelector('.fa').classList.remove('hidden');
})
const body=document.querySelector('body');
body.addEventListener('click',function(e)
{
    // console.log("1")
    // console.log(e.target);
    if(e.target.classList.contains("body")){
        
        document.querySelector('.st').classList.add('hidden');
        document.querySelector('.fa').classList.add('hidden');
    }
//    console.log(e.target)
//     console.log(e.target.classList.contains("login"))
});