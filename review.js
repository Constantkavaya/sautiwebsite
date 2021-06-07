//Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}
function calender(){
var month=["Jan,Feb,March,April,May,June,July,Aug,Sept,Oct,Nov,Dec"]
  for(let x=0 ;x<months.length;x++){
    var booking=document.createElement("calendar");
    booking.innerHTML=month[x]
    booking.classList.add("dropdown_item");


    booking.onclick=function(){
      var choosemonth=x
      selectMonth = document.getElementById("month");
     

    
    }
  }
 }
 //In your own words, explain how the script for moving the carousel works. 
 //The  script for moving the  the carousel works in the syntaxs  that when the need to display the
 // carousel and get it the used the class name to get since their different ways of getting it then  inorder for it to execute the whole block 
 //they used the for loop to itterate though the couresel where int this case  assynchromus  was applied inorder to 
 //wait for the whole code to finish executing in order for it to go for the next 
 //step and this was through setting a timeout that could enable the couresel to have a particular chaining.

 
var myObject = {
  name: "Lovelace",
  func: function() {
      var self = this;
      console.log("outer func:  this.name = " + this.name);
      console.log("outer func:  self.name = " + self.name);
      (function() {
          console.log("inner func:  this.name = " + this.name);
          console.log("inner func:  self.name = " + self.name);
      }());
  }
};
myObject.func();


// The code below will output  the outer func as Lovelace because the this keyword when used inside a function tends to point at the global object while the  other result for the inner func  the first output for this .name will bring undefined since it is an immediately invoked functions can not access it is restricted in the scope hence cannot access the global scope  
//self.name=Lovelace because the this keyword was used inside a method hence it tended to point at the object hence bringing the output 


