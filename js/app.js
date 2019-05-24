(function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();
		console.log(this.children[0].children[1].value, this.children[1].children[1].value);
	});
}());