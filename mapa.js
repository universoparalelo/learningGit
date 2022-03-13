
/*let mapa = new Map();
mapa.set("nombre","Celeste");
mapa.set("apellido","Martin");
mapa.set("dni", 44466207);

console.log(mapa);

let verificar = mapa.has("Martin");
console.log(verificar);

for(let valor of mapa.entries()){
	console.log(valor);
}*/

/*type Key = string;
type Value = string;

interface KVStore {
  put(key: Key, value: Value): Promise<Void>;

  get(key: Key): Promise<Value>;
}*/

/*let shopping = ["hola","como",["estas","buenas"]];
console.log(shopping[2][1]);*/


/*for(let i=0; i<materias.length; i++){
	console.log(`Materia: ${materias[i][0]}
Alumnos: ${materias[i][1]}
	`);
}*/

/*let fake = false;

const obtenerMateria = (buscar) =>{
	let materias = [ 
		["matematicas","Duarte",["pedro","juan","ludmila"]], 
		["fisica", "Maras", ["valeria","bianca"]],
		["programacion", "Stecher", ["celeste","ciana"]],
		["lengua", "Martinez",["juana","flor","juan","ludmila"]]
	];

	materias.filter(materia => {
		if(materia[0] == buscar){
				console.log(`Materia: ${materia[0]}
Profesor/a: ${materia[1]}
Alumnos: ${materia[2]}`);
				fake = true;
		}
	});


}
// [][](){}


obtenerMateria("lengua");
obtenerMateria("fisica");
obtenerMateria("programacion");
obtenerMateria("matematicas");


if(fake == false){
	console.log('La materia no existe');
}*/

//HISTORIA 5

/*const buscarMateria = materia =>{
	const materias = {
		analMatema : [162,10,4],
		alYgeo : [160,8,4],
		matemDiscreta : [150,7,4],
		alYestrucDeDatos : [170,8,4],
		arquitDeCompu : [179,9,4],
		fisica : [171,7,4],
		ingles : [140,7,4],
		sisYorganiz : [170,8,4]
	};

	if(materias[materia]){
		let counter=0;

		console.log(materia);

		if(materias[materia][0]>=162){
			counter++;
		}
		if(materias[materia][1]>=7){
			counter++;
		}
		if(materias[materia][2]>=3){
			counter++;
		}
		if(counter==3){
			console.log(`	%cAprobaste`,"color:green");
		}else{
			console.log(`	%cDesaprobaste`,"color:red");
		}
	}
}

buscarMateria("analMatema");
buscarMateria("alYgeo");
buscarMateria("matemDiscreta");
buscarMateria("alYestrucDeDatos");
buscarMateria("arquitDeCompu");
buscarMateria("fisica");
buscarMateria("ingles");
buscarMateria("sisYorganiz");*/

//organizacion

/*let programar = "50 minutos de programacion";
let descanso = "10 minutos de descanso";
let leer = "60 minutos de lectura";
let ejercicio = "30 minutos de ejercicio";
let houseWork = "60 minutos de cosas de la casa";

console.log("TAREAS");

for(let i=0; i<14; i++){
	if(i==0){
		console.groupCollapsed("semana 1");
	}
	console.groupCollapsed("dia " + (i+1));
	console.log(programar);
	console.log(descanso);
	console.log(leer);
	console.log(descanso);
	console.log(ejercicio);
	console.log(descanso);
	console.log(houseWork);
	console.groupEnd();
	if(i==6){
		console.groupEnd();
		console.groupCollapsed("semana 2");
	}
}*/

//**ATRIBUTOS DE LOS INPUTS**

// let input = document.querySelector(".input");

// document.write(input.className) //input
// document.write(input.value) // 220902
// document.write(input.type = "range")
// input.accept = "image/png";

// let input2 = document.querySelector(".input2");

// input2.minLength = 5
// input2.placeholder = "chupala UTN"
// input2.required = " "

//PROPIEDAD STYLE

// let titulo = document.querySelector(".titulo");

// titulo.style.color = "#f40";
// titulo.style.background = "#aa2"
// titulo.style.padding = "15px"
// titulo.style.margin = "10%"

// titulo.classList.add("grande");
// titulo.classList.remove("grande");

// let valor = titulo.classList.item(0);
// document.write(valor);

// let valor = titulo.classList.contains("titulo");

// if(valor){
// 	document.write(`La clase existe`);
// }else{
// 	document.write(`La clase no existe`);
// }

// titulo.classList.toggle("grande")
// titulo.classList.replace("titulo","h1")

// OBTENCION DEL TEXTO DEL HTML

// let titulo = document.querySelector(".titulo");

// alert(titulo.textContent);
// alert(titulo.innerHTML);
// alert(titulo.outerHTML);

//**CREACION DE ELEMENTOS**

// createTextNode()
// let contenedor = document.querySelector(".contenedor");

// let nuevoTexto = document.createElement("P");
// nuevoTexto.innerHTML = "Jueves 10 de marzo de 2022";

// contenedor.appendChild(nuevoTexto);

// nuevoTexto.style.color = "#444";
// nuevoTexto.style.margin = "7px"
// contenedor.style.background = "#2a3";

// console.log(contenedor);

//**OBTENCION DE LOS CHILDS**

// let contenedor = document.querySelector(".contenedor");

// console.log(contenedor.firstElementChild);
// console.log(contenedor.lastElementChild);
// console.log(contenedor.firstChild);
// console.log(contenedor.lastChild);
// console.log(contenedor.childNodes);
// console.log(contenedor.children)

//**METODOS DE CHILDS**

// replaceChild(nuevo,viejo)
// removeChild(nodoAremover)
// hasChildNode() true false

// const contenedor = document.querySelector(".contenedor");

// const h1_antiguo = document.querySelector(".h1");
// const h2_antiguo = document.querySelector(".h2");

// const h1_nuevo = document.createElement("H1");
// const h2_nuevo = document.createElement("H2").innerHTML = "soy un h2";
// h1_nuevo.innerHTML = "soy un h1";

// contenedor.replaceChild(h1_nuevo,h1_antiguo);
// contenedor.removeChild(contenedor.firstElementChild);
// contenedor.removeChild(h2_antiguo);
// console.log(h2_antiguo.hasChildNodes());
// console.log(h2_antiguo.parentElement)

// console.log(h1_antiguo.nextElementSibling);
// console.log(h2_antiguo.nextElementSibling);
// console.log(h2_antiguo.previousElementSibling);
// console.log(h1_antiguo.lastElementSibling);

//****HISTORIA COFLA 6*****

// const container = document.querySelector(".container");

// const crearLlave = (nombre,modelo,precio) => {
// 	nombre = `<h2>${nombre}</h2>`;
// 	modelo = `<h3>Modelo ${modelo}</h3>`;
// 	precio = `<p>Precio: $${precio}</p>`;
// 	img = "image.png";
// 	return [nombre,modelo,precio,img];
// }

// for(let i=0; i<2; i++){

// 	nombre = "Llave " + (i+1);
// 	let llave = crearLlave(nombre, "XXII", 350);
// 	console.count();
// 	container.innerHTML += `
// ${llave[0]}
// ${llave[1]}
// ${llave[2]}
// ${llave[3]}`;}
// console.log(llave[0])
// document.write(llave)

//Lista de tareas
/*const crearTarea = () =>{
	const container = document.querySelector(".container");
	const label = document.createElement("LABEL")
	const input = document.createElement("INPUT");
	input.setAttribute("type","checkbox");
	input.classList.add("item");
	label.appendChild(input);
	let texto = prompt('Escriba su tarea:');
	let textNode = document.createTextNode(texto);
	label.appendChild(textNode);
	container.appendChild(label);
}

let rta;

do{
	rta = prompt('Quiere agregar una tarea a la lista?(s/n)');
	if(rta=='s'){
		crearTarea();
	}
}while(rta === 's');*/









