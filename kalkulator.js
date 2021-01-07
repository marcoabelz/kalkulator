var tombol = document.querySelector(".container-tombol");
var layar = document.querySelector("#layar");
var resetLayar = false;
var bolehHitung = false;
var tmpVal = '';
var operator = '';

tombol.addEventListener("click", function(e){
	
	var tombolClick = e.target;
	var nilaiTombol = tombolClick.innerText;

	if (nilaiTombol == "C") {
		layar.value = "";
	}
	else if (nilaiTombol == "<") {
		layar.value = layar.value.slice(0, -1);
	} 	
	else if (nilaiTombol == "=") {
		if(bolehHitung == true){
			layar.value = eval(tmpVal + operator + layar.value);
			bolehHitung = false;
		}
	} 
	else if(tombolClick.classList.contains('operator')){
		if(bolehHitung == true){
			layar.value = eval(tmpVal + operator + layar.value);
			bolehHitung = false;
		}

		tmpVal = layar.value;
		operator = nilaiTombol;
		resetLayar = true;
	}
	else{
		if (resetLayar == true) {
			layar.value = nilaiTombol;
			resetLayar = false;
			bolehHitung = true;
		}else {
			layar.value = layar.value + nilaiTombol;
		} 
	}
});