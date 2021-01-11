'use strict';

console.log("Dziala C:");

document.addEventListener('DOMContentLoaded', function(){

	/*
	var newTask = document.createElement('li');
			var newTaskContent = document.createElement('div');
			var newButton = document.createElement('button');
			newTaskContent.innerHTML = input.value;
			newButton.innerHTML = 'Usuń';
			newButton.classList.add('btn', 'delete-btn');
			//newTask.innerHTML = input.value;
			newTask.appendChild(newButton);
			lista.appendChild(newTaskContent);
			lista.appendChild(newTask);
			input.value = '';
			*/
	function addNumber() {
		var input = document.querySelector('.input');
		
		if (this.classList.contains('jeden')) {
			input.innerHTML += '1'
		}
		if (this.classList.contains('dwa')) {
			input.innerHTML += '2';
		}
		if (this.classList.contains('trzy')) {
			input.innerHTML += '3';
		}
		if (this.classList.contains('cztery')) {
			input.innerHTML += '4';
		}
		if (this.classList.contains('piec')) {
			input.innerHTML += '5';
		}
		if (this.classList.contains('szesc')) {
			input.innerHTML += '6';
		}
		if (this.classList.contains('siedem')) {
			input.innerHTML += '7';
		}
		if (this.classList.contains('osiem')) {
			input.innerHTML += '8';
		}
		if (this.classList.contains('dziewiec')) {
			input.innerHTML += '9';
		}
		if (this.classList.contains('zero')) {
			input.innerHTML += '0';
		}
		if (this.classList.contains('mnozenie')) {
			input.innerHTML += '*';
		}
		if (this.classList.contains('dzielenie')) {
			input.innerHTML += '/';
		}
		if (this.classList.contains('dodawanie')) {
			input.innerHTML += '+';
		}
		if (this.classList.contains('odejmowanie')) {
			input.innerHTML += '-';
		}
		if (this.classList.contains('rowna-sie')) {
			input.innerHTML = Calculator(input.innerText);
		}

		console.log(input.innerText);

	}

	function Calculator(tekst) {
    	var x = tekst;
    	/*
    	var y = x.split('+');

    	var a = parseInt(y[0]);
    	var b = parseInt(y[1]);
    	*/

    	if (eval(x) === Infinity) {
    		alert("Nie można dzielić przez 0 :/")
    		return '';
    	}
    	else {
    		return eval(x);
    	}

    	
	}

	var przyciski = document.querySelectorAll('.przycisk');

	console.log(przyciski);
	console.log(przyciski[0].classList);

	for (var i = 0; i < przyciski.length; i++) {
		przyciski[i].addEventListener('click', addNumber);
	}

	

})