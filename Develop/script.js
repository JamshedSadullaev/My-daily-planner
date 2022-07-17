

var timeShow=$("#time-show");


setInterval  (function(){
    var currentTime = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    // console.log(currentTime);
    timeShow.text(currentTime);
    
},1000);




{
// save button function 
$('.saveBtn').click(function(){
    var hour9 = document.querySelector(".nine").value;
    localStorage.setItem("text9",hour9)  ;
    var hour10 = document.querySelector(".ten").value;
    localStorage.setItem("text10",hour10)  ;
    var hour11 = document.querySelector(".eleven").value;
    localStorage.setItem("text11",hour11)  ;
    var hour12 = document.querySelector(".twelve").value;
    localStorage.setItem("text12",hour12)  ;
    var hour1 = document.querySelector(".one").value;
    localStorage.setItem("text1",hour1)  ;
    var hour2 = document.querySelector(".two").value;
    localStorage.setItem("text2",hour2)  ;
    var hour3 = document.querySelector(".three").value;
    localStorage.setItem("text3",hour3)  ;
    var hour4 = document.querySelector(".four").value;
    localStorage.setItem("text4",hour4)  ;
    var hour5 = document.querySelector(".five").value;
    localStorage.setItem("text5",hour5)  ;
});
}
var time9 = localStorage.getItem("text9");
document.querySelector(".nine").value = time9;
var time10 = localStorage.getItem("text10");
document.querySelector(".ten").value = time10;
var time11 = localStorage.getItem("text11");
document.querySelector(".eleven").value = time11;
var time12 = localStorage.getItem("text12");
document.querySelector(".twelve").value = time12;
var time1 = localStorage.getItem("text1");
document.querySelector(".one").value = time1;
var time2 = localStorage.getItem("text2");
document.querySelector(".two").value = time2;
var time3 = localStorage.getItem("text3");
document.querySelector(".three").value = time3;
var time4 = localStorage.getItem("text4");
document.querySelector(".four").value = time4;
var time5 = localStorage.getItem("text5");
document.querySelector(".five").value = time5;

// Changin color as time passes function

$(document).ready(function() 
{
   

    
    var currentTime = moment().hour();;

    for (var i = 9; i < 18; i++) {
      if (i < currentTime) {
        document.getElementById(i.toString()).classList.add('past'); 
        } else if (i === currentTime) {
            document.getElementById(i.toString()).classList.add('present'); 
        } else  {
            document.getElementById(i.toString()).classList.add('future'); 
        }
    }


});












