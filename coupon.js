// create function for coupon discount
var y = parseInt(localStorage.getItem("Amount"));

var a = document.getElementById("cop1")

a.addEventListener("click", function() {
	localStorage.setItem("Amount", y * 0.5);
	alert("You have recieved your discount the total of your items is now R" + y);
});
