(function() {
	let people = [];
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	if (localStorage) {
		console.log("This browser/device does support the Web Storage API");
		init();
	} else {
		console.log("This browser/device does not support the Web Storage API");
	}

	function init() {
		// User Storage
		if (localStorage.getItem("people")) {
			people = JSON.parse(localStorage.getItem("people"));
			populateTable();
		}

		let form = document.getElementById("form");
		form.addEventListener("submit", function(event) {
			event.preventDefault();

			let person = {};
			person.name = this.children[0].children[1].value;
			person.age = this.children[1].children[1].value;
			people.push(person);

			localStorage.people = JSON.stringify(people);
			populateTable();

			form.reset();
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


		// Delete Storage
		let deleteStorage = document.getElementById("delete-storage");
		deleteStorage.addEventListener("click", function() {
			localStorage.clear();
			console.log("Local Storage has been deleted");
			people = [];
		});

		// Display Storage
		function populateTable() {
			let tableBody = document.getElementsByTagName("tbody")[0];
			while (tableBody.firstChild) {
				tableBody.removeChild(tableBody.firstChild);
			}
			people.forEach(function(person) {
				let row = document.createElement("tr");
				let nameCell = document.createElement("td");
				nameCell.textContent = person.name;

				let ageCell = document.createElement("td");
				ageCell.textContent = person.age;

				row.appendChild(nameCell);
				row.appendChild(ageCell);

				tableBody.appendChild(row);
			});
		}
	}
}());