let span =document.querySelector(".up");
window.onscroll=function(){
    // console.log(this.scrollY);
    if(this.scrollY>=600){
        span.classList.add("show");
    }
    else{
        span.classList.remove("show");
    }
};
span.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
}
var btn = document.getElementById("btn");
      var navbar= document.getElementById("navbar");
      function togglebtn(){
         btn.classList.toggle("active");
         navbar.classList.toggle("on");
      }
// var navbar=document.getElementById("navbar");
// window.onscroll=function(){
// if(window.pageYOffset>=150){
// navbar.classList.add("sticky");
// }
// else{
// navbar.classList.remove("sticky");
// }
//}
// let popup=document.getElementById("popup");
//     function openpopup(){
//         popup.classList.add("open-popup");
//     }
//     function closepopup(){
//         popup.classList.remove("open-popup");
//     }
function openpopup(){
    alert("Thank you!Your details has been scccessfully submitted.")
}