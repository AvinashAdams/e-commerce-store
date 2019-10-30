// create variable to store
var x = parseInt(localStorage.getItem("Amount"));
// create function to pick option
let pick = null;
$("#stan").click(function() {
	if (pick != null) {
		if (pick == false) {
			localStorage.setItem("Amount", x += 50);
			alert("The total amount of your order is now R" + x)
			pick = true;
		};
	} else if (pick == null) {
		localStorage.setItem("Amount", x += 70)
		alert("The total amount of your order is now R" + x)
		pick = true;
	};
});
// create function for delivery option same as above
$("#same").click(function() {
	if (pick != null) {
		if (pick == true) {
			localStorage.setItem("Amount", x -= 50);
			alert("The total amount of your order is now R" + x)
			pick = false;
		};
	} else if (pick == null) {
		localStorage.setItem("Amount", x += 60)
		alert("The total amount of your order is now R" + x)
		pick = false;
	};
});
// create function to purchace 
function purchase1() {
	var h = parseInt(localStorage.getItem("Amount"));
	var k = JSON.parse(localStorage.getItem("Items"));

	localStorage.setItem("Amount", 0)
	localStorage.setItem("Items", JSON.stringify([]));
// create function to generate reference number
	var l = (Math.random() * 0xFFFFFF).toString(16)
	alert("The reference number for your order is " + l)
}
