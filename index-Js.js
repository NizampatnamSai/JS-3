/*var arr =[1,2,3]
var callback=(elmt,index)=>{
    console.log(elmt,index)
}
arr.forEach(callback);

var arr1 =[10,20,30]
arr1.forEach((elmtt,index1) => {
    console.log(elmtt,index1)
})*/
/*var h2=document.getElementById('h2');
var h21=h2.innerHTML;
setInterval(function(){
    h21=h21>0? h21+1:0;
    h2.innerHTML=h21;
    },1000);*/
/*
setInterval(() => {
    h21 >=0 ? h21+=1:0;
    h2.innerHTML=h21  
}, 1000);*/


var ch2=document.getElementById('h2');
var value2=ch2.innerHTML;
var value=value2;
setInterval(function()
{
    value=value>0? value+1:0;
    ch2.innerHTML=value;
   
},500)
alert('Js-4!')
