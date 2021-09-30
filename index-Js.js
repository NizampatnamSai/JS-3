function add(x,y){
    z=x+y;
    console.log(z)
}
add(4,1)
var add=function(x=1,y=2){
           z=x+y;
           console.log(z)
}
add(4,5)
var add=(x=3,y=5)=>{
    z=x+y;
    console.log(z)
}
add(65,65)
var h2=document.getElementById('h2');
var h21=h2.innerHTML;
h21=56;
h2.innerHTML=h21;