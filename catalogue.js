// create item function
function item(name, priceEle) {
	this.name = name
	this.price = priceEle;
};
// create array to store items
let nike = new item ("Nike AF1 High Boot", 2999.95);
let adidas = new item ("Adidas Nite Jogger", 1899.95);
let con = new item ("Adidas Continental 80", 1399.95);
let hoody = new item ("Grey Nike Hoody", 999.95);
let polo = new item ("White Polo T-Shirt", 299.95);
// stores items in sessionstorage
sessionStorage.setItem("Catalogue", JSON.stringify([nike, adidas, con, hoody, polo]));

var amount = parseInt(localStorage.getItem("Amount"));
if (!amount) {
	amount = 0;
	var items = [];
	localStorage.setItem("Items", JSON.stringify(items));
} else {
	var items = JSON.parse(localStorage.getItem("Items"));
};

localStorage.setItem("Amount", amount);

if (!items) {
}
// create function to add item 1 to cart
function addtocart1() {
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[0]];
	} else {
		b.push(a[0]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[0].price);
	alert("The current total of the items is R" + c);
};
// create function to add item 2 to cart
function addtocart2() {
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[1]];
	} else {
		b.push(a[1]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[1].price);
	alert("The current total of the items is R" + c);
};
// create function to add item 3 to cart
function addtocart3() {
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[2]];
	} else {
		b.push(a[2]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[2].price);
	alert("The current total of the items is R" + c);
};
// create function to add item 4 to cart
function addtocart4() {
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[3]];
	} else {
		b.push(a[3]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[3].price);
	alert("The current total of the items is R" + c);
};
// create function to add item 5 to cart
function addtocart5() {
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[4]];
	} else {
		b.push(a[4]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[4].price);
	alert("The current total of the items is R" + c);
};
//end of add to cart function

