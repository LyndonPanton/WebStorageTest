(function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	if (localStorage) {
		console.log("This browser/device does support the Web Storage API");
		init();
	} else {
		console.log("This browser/device does not support the Web Storage API");
	}

	function init() {
		let form = document.getElementById("form");
		form.addEventListener("submit", function(event) {
			event.preventDefault();
			console.log(this.children[0].children[1].value, this.children[1].children[1].value);
		});

		// console.log(!!localStorage.getItem("inputName"));
		// console.log(!!localStorage.getItem("inputAge"));

		// Name Storage

		let formName = document.getElementById("form-name");

		if (localStorage.getItem("inputName")) {
			formName.value = localStorage.getItem("inputName");
		}

		formName.addEventListener("input", function() {
			localStorage.setItem("inputName", this.value);
			console.log(localStorage.getItem("inputName"));
		});

		// Age Storage

		let formAge = document.getElementById("form-age");

		if (localStorage.getItem("inputAge")) {
			formAge.value = localStorage.getItem("inputAge");
		}

		formAge.addEventListener("input", function() {
			localStorage.setItem("inputAge", this.value);
			console.log(localStorage.getItem("inputAge"));
		});


		
	}
}());