var tecets = document.getElementById("tecket")
var dats = document.getElementById("time")

var actvt = document.getElementById("actvty")
v


function fun() {
    var txt;
    alert("OH! " + actvt.value + " that's a wonderful choise .. you want to book " + tecets.value + " teckets for " + actvt.value + " and the date is " + dats.value + " are you sure to submit ?")


}
document.getElementById("demo").innerHTML = txt;



function pric() {
    var price;
    if (actvt.value == safari) {
        price.value = 600;
    } else if (actvt.value == diving) {
        price.value = 500;
    } else { price.value = 1000; }
    return price.value;

}