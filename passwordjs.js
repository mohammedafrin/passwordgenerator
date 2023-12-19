const inputslider=document.getElementById('inputslider');
const slidervalue=document.getElementById('slidervalue');
const passbox=document.getElementById('passbox');
const lowercase=document.getElementById('lowercase');
const uppercase=document.getElementById('uppercase');
const numbercase=document.getElementById('numbercase');
const specialcase=document.getElementById('specialcase');
const genbtn=document.getElementById('genbtn');
slidervalue.innerHTML=inputslider.value;
inputslider.addEventListener('input',()=>{
    slidervalue.innerHTML=inputslider.value;
});
let upperchars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchars="abcdefghijklmnopqrstuvwxyz";
let numbers="0123456789";
let symbols="!@#$%^&*";
function generatepassword(){
    let genpass="";
    let allchars="";
    allchars+=lowercase.checked ? lowerchars:"";
    allchars+=uppercase.checked ? upperchars:"";
    allchars+=numbercase.checked ? numbers:"";
    allchars+=specialcase.checked ? symbols:"";
    if(allchars=="" || allchars==0){
    return genpass;}
    let i=1;
    while(i<=inputslider.value){
    genpass+=allchars.charAt(Math.floor(Math.random()*allchars.length));
    i++;}
    return genpass;

}
genbtn.addEventListener('click',()=>{
    passbox.value=generatepassword();
})