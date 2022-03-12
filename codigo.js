/*let signo = prompt("Decime tu signo zodiacal");

alert("Ja sos " + signo);

let numero = 5;

numero += 5;

numero++;

document.write(numero)

let numero1,resultado
const iva = 0.003;

numero1 = prompt("Escriba su inversion");

resultado =(numero1*iva);

resultado += numero1;

alert(resultado);

nombre = "Celeste";

frase = `soy ${nombre} y estoy caminando`;

document.write(frase);*/

//****CONCATENACION***


// let frase = "Hola como estas?, ";
// let frase2 = "Estas ocupada?";

// document.write(frase + frase2);
// document.write(frase.concat(frase2));

// let resultado = `Buenas ${frase}`;

// document.write(resultado);

// **OPERADORES***

/*let numero1 = 40;
let numero2 = 38;

document.write(numero1 < numero2);

document.write (false && true);
document.write(true && true);
document.write(true || false);
document.write(false || false);
document.write(!true);
document.write(!false);

//***CONDICIONALES**

let nombre = "CelestE";

if ( nombre == "Celeste"){
	alert('Hola ' + nombre);
}
else{
	alert('Hola extraño');
}*/
//Programita 0
/*
let precio1 = prompt("Ingrese el dinero del primero: ");
let precio2 = prompt("Ingrese el dinero del segundo: ");
let precio3 = prompt("Ingrese el dinero del tercero: ");
let mayor,sobrante,total;

if(precio1 > precio2){
	mayor = precio1;
}
else{
	mayor = precio2;
}

if(precio3 > precio2){
	mayor = precio3;
}

if(precio3 > precio1){
	mayor = precio3;
}

alert('El monto mayor es ' + mayor);

let num = prompt(`1. Helado Marroc = $55
2. Helado Nutella = $75
3. Helado Terrabusi = $75`);

if (num == 1){
	if (mayor > 55*3){
	total = 55*3;
	sobrante = mayor - (55*3);
	alert('El monto total es: '+ total);
	}
	if(sobrante!=0){
		alert('El sobrante es: ' + sobrante);
	}
}

if (num == 2){
	if (mayor > 75*3){
	total = 75*3;
	sobrante = mayor - (75*3);
	alert('El monto total es: '+ total);
	}
	if(sobrante!=0){
		alert('El sobrante es: ' + sobrante);
	}
}

if (num == 3){
	if (mayor > 75*3){
	total = 75*3;
	sobrante = mayor - (75*3);
	alert('El monto total es: '+ total);
	}
	if(sobrante!=0){
		alert('El sobrante es: ' + sobrante);
	}
}*/
/*
//ARRAYS
let frutas = ["manzana", "banana", "pera", "naranja"];

document.write(frutas[0]);

for (var i = 0; i <= 3; i++) {
	document.write(i + frutas[i]);
}*/

//ARRAYS ASOCIATIVAS

/*let pc =  {
	marca: "Lenovo",
	procesador: "Intel core 17",
	ram: "16GB",
	espacio: "1TB",
}
//let resultado = prompt("Escriba el dato que quiere ver");

document.write(`<br> El nombre de mi computadora es: ${pc.marca}<br>
				El procesador es: ${pc.procesador}<br>
				La ram es: ${pc.ram}<br>
				El espacio es: ${pc.espacio}`);*/

//WHILE
/*
let numero = 0;

while(numero < 10){
	numero++;
	document.write(numero);
}

//DO WHILE

let letras = ['a','b','c','d'];
let i = 0;

do {
	document.write(letras[i] + "<br>");
	i++;
}
while(i < 4);

//FOR
let notas=["horrible","feo","pesimo","maomeno","desaprobado","rasguñando","tranca","aprobado","excelente","exquisito"];

for (let i = 0; i<10; i++) {
	document.write((i+1) + " - " + notas[i] + "<br>");
}

//FOR BREAK
for (let i=0; i<20; i++){
	if(i==12){
		break;
	}
	document.write(i + "<br>");
}

//FOR CONTINUE
for (let i=0; i<20; i++){
	if(i==12){
		continue;
	}
	document.write(i + "<br>");
}

//FOR IN
let abecedario = ['a', 'b', 'c', 'd', 'e', 'f'];

for(letra in abecedario){
	document.write(letra + " - " + abecedario[letra] + "<br>");
}

document.write("<br>");


//FOR OF
for(letra of abecedario){
	document.write(letra + "<br>");
}


//SENTENCIA LABEL
let naturales = [1,2,3,4,5];
let enteros = [-3,-2,-1,naturales,-4,-5,-6];

forNumeros:
for(let entero in enteros){
	if(entero == 3){
		for(let natural of naturales){
			
			document.write(natural+"<br>");
			continue forNumeros;

		}
	}
	else document.write(enteros[entero]+"<br>");
}

//FUNCIONES

function comidaPerros(){
	let respuesta = prompt("Hola Celeste, que hora es?");

	if(respuesta==(10 || 22)){
		alert('Dale de come a los perros');
		//RETURN
		return "Funcion operada correctamente";
	}
	else{
		alert('Segui programando');
		return "Vuelva más tarde";
	}
	
}

let retorno = comidaPerros();

document.write(retorno);

//PARAMETROS

function sumar(num1,num2){
	let res = num1 + num2;
	document.write(res+"<br>");
}

sumar(12,32);
sumar(12,42);

//SCOPES

function saludar(nombre){
	alert(`hola ${nombre}, cómo estas?`);
}

let carajo = "Celeste";

saludar(carajo);*/

//FUNCIONES FLECHAS

/*const saludar = (nombre)=>{
	alert(`hola ${nombre}, cómo estas?`);
}

saludar("Celeste");
//ABREVIACION 1
const saludar2 = nombre=>{
	alert(`hola ${nombre}, cómo estas?`);
}

saludar2("Ludmila");
//ABREVIACION 2
const saludar3 = nombre=> alert(`hola ${nombre}, cómo estas?`);

saludar3("Bianca");*/

//MAQUINA DE COFLA

/*let persona = 1;
for(let i=0; i<4; i++){
	let edad = prompt("Escriba su edad: ");
	

	if(edad < 18) alert('No puede entrar');

	else {
		let hora = prompt('Que hora es?: ');
		if((hora >= 2)&&(persona==1)){
			alert("Tiene la entrada gratis");
			persona++;
		}
		else alert('Paga entrada');

	alert('Que tenga una linda velada');
	}
}*/

//AUSENTES Y PRESENTES

/*
 Crear mini-sistema que nos permita registrar
los alumnos que estan presentes (P) y ausentes(A)
en clase.
 Pasados los 30 dias mostrar la situacion finalde todos los 
alumnos (Nro total de presentes y ausentes)
 Se puede tener un maximo de 10% de ausencias por
semestre, si se tienen mas aclarar que esta reprobado*/ 

//MATRICES

// alumno[i][j]
// alumno[celeste][2]
// alumno[0][0]=celeste
// alumno[0][1]=2

//CLASES

/*class peces {
	constructor(nombre, reino, filo){
		this.nombre = nombre;
		this.reino = reino;
		this.filo = filo;
		this.info = `Es un pez, se llama ${nombre}. Pertenece
pertenece al reino ${reino}	y a la filo ${filo}`;
	}
	verInfo(){
		document.write(this.info + "<br>");
	}
}

let lampreas = new peces("lampreas", "Animalia", "Chordata");
let myxino = new peces ("myxino", "Animalia", "Chordata");

lampreas.verInfo();
myxino.verInfo();*/

//HERENCIA

/*class Auto {
	constructor(marca, modelo, color, precio){
		this.marca = marca;
		this.modelo = modelo;
		this.color = color;
		this.precio = precio;
	}
	verInfo(){
		document.write(`Este auto es un ${this.marca}, modelo
			${this.modelo}. Esta disponible en el color ${this.color}
			y se vende al precio de $${this.precio}. `);
	}
}

class Audi extends Auto{
	constructor(marca, modelo, color, precio, largo, ancho){
		super(marca,modelo,color,precio);
		this.largo = largo;
		this.ancho = ancho;
	}
	verDimensiones(){
		document.write(`Ademas las dimensiones de este auto son
			${this.largo}m de largo y ${this.ancho}m de ancho`);
	}
}

let chevrolet = new Auto("Chevrolet", "Cruze", "negro", 14000);
let audi = new Audi("Audi", "C4", "azul", "30000", 3.5, 2.3);

chevrolet.verInfo();
document.write("<br>");
audi.verInfo();
audi.verDimensiones();
document.write("<br>");*/



//STATIC METHODS *no necesitan parametros

/*class Casa{
	constructor(largo, ancho, cantPisos, color){
		this.largo = largo;
		this.ancho = ancho;
		this.cantPisos = cantPisos;
		this.color = color;
	}
	static construir(){
		document.write('Empecemos a construir');
	}
}

Casa.construir();*/

//getters y setters

/*class Computer {
	constructor(marca, espacio, ram, color){
		this.marca = marca;
		this.espacio = espacio;
		this.ram = ram;
		this.color = color;
	}
	verInfo(){
		console.log(`
			*Marca = ${this.marca}
			Espacio = ${this.espacio}
			RAM = ${this.ram}
			Color = ${this.color}`);
	}
}

class Apple extends Computer{
	constructor(marca,espacio,ram,color,nombre,tecla){
		super(marca,espacio,ram,color);
		this.nombre = null;
		this.tecla = tecla;
	}
	set setNombre(newNombre){
		this.nombre = newNombre;
	}
	get getNombre(){
		return this.nombre;
	}
	set setTecla(newTecla){
		this.tecla = newTecla;
	}
	get getTecla(){
		return this.tecla;
	}

}

const lenovo = new Computer("Lenovo", "1TB", "16Gb", "negro");
const windows = new Computer("Windows", "500Gb", "16Gb", "blanco");
const apple = new Apple("Apple", "1TB", "16GB", "rosado");

lenovo.verInfo();
windows.verInfo();

apple.setNombre = prompt("Escriba el nombre de su computador: ");
apple.setTecla = prompt("Escriba la tecla especial de su computador: ");

apple.verInfo();
console.log(apple.getNombre);
console.log(apple.getTecla);*/

//**HISTORIA COFLA parte3**

/*class Celular {
	constructor(color, peso, resPant, resCamara, ram){
		this.color = color;
		this.peso = peso;
		this.resPant = resPant;
		this.resCamara = resCamara;
		this.ram = ram;
		this.encendido = false;
	}
	verInfo(){
		console.log(`
			*Color: ${this.color}
			Peso: ${this.peso}
			Resolucion de Pantalla: ${this.resPant}
			Resolucion de Camara: ${this.resCamara}
			RAM: ${this.ram}`);
	}
	prender(){
		if(this.encendido == false){
			alert('Encendido');
			this.encendido = true;
		}
		else alert('Esta encendido');
	}
	reiniciar(){
		if(this.encendido == true){
			alert('Reiniciando...');
		}
		else {
			alert('Esta apagado');
			this.encendido = false;
		}
	}
	tomarFotos(){
		alert(`Tomando fotos con calidad ${this.resCamara}`);
	}
	grabar(){
		alert(`Grabando video con calidad ${this.resCamara}`);
	}
	apagar(){
		if(this.encendido == true){
			alert('Celular apagado');
			this.encendido = false;
		}
		else alert('El celular esta apagado');
	}
}

const samsungA32 = new Celular("negro", "184gr", "26.4'", "64.0MP", "8gb");
const motoG20 = new Celular("rosa flamingo", "200gr", "6.5'", "48MP", "4Gb");
const xiaomiRedmiNote9 = new Celular("gris medianoche","199gr","6.5'","48MP","6Gb");*/

// samsungA32.verInfo();
// motoG20.verInfo();
// xiaomiRedmiNote9.verInfo();
// samsungA32.prender();
// samsungA32.tomarFotos();
// samsungA32.grabar();
// samsungA32.reiniciar();
// samsungA32.apagar();
// motoG20.prender();
// motoG20.tomarFotos();
// motoG20.grabar();
// motoG20.apagar();
// motoG20.reiniciar();
// xiaomiRedmiNote9.prender();
// xiaomiRedmiNote9.tomarFotos();
// xiaomiRedmiNote9.grabar();
// xiaomiRedmiNote9.apagar();
// xiaomiRedmiNote9.reiniciar();




/*class AltaGama extends Celular{
	constructor(color,peso,resPant,resCamara,ram,camEx){
		super(color,peso,resPant,resCamara,ram);
		this.camEx = camEx;
	}
	camaraLenta(){
		alert(`Entraste a la camara lenta. 
			Presiona el boton rojo para empezar a grabar`);
	}
	faceID(){
		alert(`Ir a configuraciones para activar el FaceID`);
	}
	camExtra(){
		alert(`Esta cámara extra es de ${this.camEx}. Que lo disfrutes`);
	}
}

const apple = new AltaGama("negro","200gr","700px","900px", "6Gb", "4k");
const samsung = new AltaGama("negro", "100gr", "800px", "1200px", "4Gb", "full HD");*/

// apple.verInfo();
// apple.camaraLenta();
// apple.faceID();
// apple.camExtra();
// samsung.verInfo();
// samsung.camaraLenta();
// samsung.faceID();
// samsung.camExtra();


/*class App{
	constructor(nombre,cantDescargas,punt){
		this.nombre = nombre;
		this.cantDescargas = cantDescargas;
		this.punt = punt;
		this.inst = false;
		this.abierto = false;
	}
	verInfo(){
		console.log(`
			*Nombre: ${this.nombre}
			Cantidad de descargas: ${this.cantDescargas}
			Puntuacion: ${this.punt}`);
	}
	instalar(){
		if(this.inst == false){
			alert(`Instalado ${this.nombre} correctamente`);
			this.inst = true;
		}
		else alert(`${this.nombre} ya está instalado`);
	}
	abrir(){
		if((this.abierto==false)&&(this.inst==true)){
			alert(`${this.nombre} abierto, ahora a jugar`);
			this.abierto = true;
		}
		else {
			alert(`${this.nombre} no está instalado o está abierto`);
		}
	}
	cerrar(){
		if(this.abierto == true){
			alert(`Cerrando aplicación`);
			this.abierto = false;
		}
		else alert(`La aplicacion está cerrada`);
	}
	desinstalar(){
		if(this.inst == true){
			alert(`Desinstalando aplicacion`);
			this.inst = false;
		}
		else alert('La aplicacion no está instalada');
	}
}

const manosFrias = new App("Manos Frias", 30000, 4.5);
const escondidas = new App("Escondidas", "4 millones", 4.7);
const freeFire = new App("Free Fire", "1 billon", 4.3);
const ladronPolicia = new App("Ladron y Policia", "50 millones", 4.1);
const acachada = new App("Acachada", "100 millones", 4.8);
const guerraFria = new App("Guerra Fria", 2000, 3.7);
const javaVScpp = new App("Java VS C++", 10000, 4.2);*/

// manosFrias.verInfo();
// escondidas.verInfo();
// ladronPolicia.verInfo();
// guerraFria.verInfo();
// javaVScpp.verInfo();
// freeFire.verInfo();
// acachada.verInfo();

//METODOS DE CADENAS

// let cadena = "cadena 1 1 1 1 1 1 cadena cadena";
// let cadena2 = "cadena 1 ";
// let cadena3 = " no ";

// cadena.concat(cadena2);
// cadena.startsWith(cadena2);
// cadena.endsWith(cadena2);
// cadena.includes(cadena3);
// cadena.indexOf("1");
// cadena.lastIndexOf("cadena")
/*for(let i = 26 ; i < 32; i++){
	document.write(i + " " + cadena[i] + "<br>");
}*/
//let resultado = cadena3.padStart(10, "no");
//let resultado2 = cadena3.padEnd(10, "no");
//let resultado = cadena3.repeat(3);

//METODOS QUE TRANSFORMAN CADENAS***

// let cadena = "hola 32 45 4aa FELICES los nobios";

/*let resultado = cadena.split(" ");

for (let i =  0; i < resultado.length; i++) {
	document.write(resultado[i] + "<br>");
}*/

// let resultado = cadena.substring(0,20);
// let resultado = cadena.toUpperCase();
// let resultado = cadena.toLowerCase();

// let cadena2 = ["Celeste", "matematicas"];

// let resultado = cadena2.toString();

// resultado.length
// document.write(resultado[12]);

// let cadena3 = "   ciana   ";

// let resultado = cadena3.trim();
// let resultado = cadena3.trimEnd();
// let resultado = cadena3.trimStart();

//document.write(resultado.length);

//***METDOS DE ARRAYS****

// let nombre = ["ludmila", "bianca", "valeria"];

// nombre.pop();
// nombre.shift();
// nombre.push("ciana");
// nombre.reverse();
// nombre.unshift("celeste");
// nombre.sort();
// nombre.splice(1,1,"ramiro","andrea");

// document.write(nombre+"<br>");

//**METODOS ACCESORES**

// let numero = [1,2,3,4,5,6];

// let resultado = numero.join(" - ");
// let resultado = numero.slice(0,3);

// document.write(resultado);

//***FILTER****


// let materias = ["matematica", "fisica", "quimica", "etica"];


// materias.filter(materia => document.write(materia + "<br>"));
// materias.forEach(materia => document.write(materia + "<br>"));
// let resultado = materias.filter(materia => materia.length > 6);

// document.write(resultado);

//***OBJETO MATH***

/*let raizCuadrada = Math.sqrt(25);
let raizCubica = Math.cbrt(8);
let numMax = Math.max(1,253,45,99,-34,0);
let numMin = Math.min(1,253,45,99,-34,0);
let random = Math.random();
let redondeo = Math.round(3.7);
let redondeoAbajo = Math.floor(4.6);
let redonDecimal = Math.fround(4.9);
let eliminaDecimal = Math.trunc(5.676);
let pi = Math.PI;
let sqrt1_2 = Math.SQRT1_2;
let sqrt2 = Math.SQRT2;
let E = Math.E;
let LN2 = Math.LN2;
let LN10 = Math.LN10;
let LOG2E = Math.LOG2E;
let LOG10E = Math.LOG10E;

document.write(LOG10E);*/

//HISTORIA COFLA 4

//calculadora

/*const sumar = (num1, num2) => {
	resultado = parseInt(num1) + parseInt(num2);
	return resultado;
}

const restar = (num1, num2) => {
	resultado = parseInt(num1) - parseInt(num2);
	return resultado;
}

const multiplicar = (num1, num2) => {
	resultado = parseInt(num1) * parseInt(num2);
	return resultado;
}

const dividir = (num1, num2) => {
	resultado = parseInt(num1) / parseInt(num2);
	return resultado;
}

const raizCubica = (num1) => {
	resultado = Math.cbrt(num1)
	return resultado;
}

const raizCuadrada = num1 => {
	resultado = Math.sqrt(num1);
	alert('El resultado es: ' + resultado);
}

const potencia = (num1, num2) => {
	let resultado = 1;

	for(let i=0; i<num2; i++){
		resultado *= num1;
	}
	alert('El resultado es: ' + resultado);
}

alert('Elija la operacion que desea realizar');

let respuesta = prompt('1.Sumar 2.Restar 3.Multiplicar 4.Dividir 5.Potencia 6.Raiz Cuadrada 7.Raiz cubica');
let num1,num2;

if (respuesta == 1){
	num1 = prompt('Escriba el primer numero:');
	num2 = prompt('Escriba el segundo numero:');
	sumar(num1,num2);
}

else if (respuesta == 2){
	num1 = prompt('Escriba el primer numero:');
	num2 = prompt('Escriba el segundo numero:');
	restar(num1,num2);
}

else if (respuesta == 3){
	num1 = prompt('Escriba el primer numero:');
	num2 = prompt('Escriba el segundo numero:');
	multiplicar(num1,num2);
}

else if (respuesta == 4){
	num1 = prompt('Escriba el primer numero:');
	num2 = prompt('Escriba el segundo numero:');
	dividir(num1,num2);
}

else if (respuesta == 5){
	num1 = prompt('Escriba el primer numero:');
	num2 = prompt('Escriba el segundo numero:');
	potencia(num1,num2);
}

else if (respuesta == 6){
	num1 = prompt('Escriba el primer numero:');
	raizCuadrada(num1);
}

else if (respuesta == 7){
	num1 = prompt('Escriba el primer numero:');
	raizCubica(num1);
}


alert('El resultado es: ' + resultado);*/

//CREANDO SOLUCIONES SEGUNDO EJERCICIO

/*const obtenerMateria = materia=>{
	materias = {
		biologia: ["Martin","pedro","juan","flor","agustina"],
		computacion: ["Rodich","pedro","juan","flor","sofia"],
		dibujo: ["Marchini","pedro","juan","agustina","sofia"],
		teatro: ["Salinas","pedro","flor","agustina","sofia"]
	}
	if(materias[materia]){
		return [materias[materia],materia];
	}
	else return materias;
}

const mostrarInfo = materia =>{
	let informacion = obtenerMateria(materia);

	if(informacion!==false){
		let profesor = obtenerMateria(materia)[0][0];
		let alumnos = obtenerMateria(materia)[0];
		alumnos.shift();
		console.log(`Materia: ${informacion[1]}
Profesor: ${profesor}
Alumnos: ${alumnos}`);
	}
}

const cantidadClases = alumno => {
	let informacion = obtenerMateria();
	let cantidadTotal = 0;
	let clasesPresentes = [];
	for(info in informacion){
		if(informacion[info].includes(alumno)){
			cantidadTotal++;
			clasesPresentes.push(" " + info);
		}
	}
	return console.log(`${alumno} esta en ${cantidadTotal} clases
Las clases son: ${clasesPresentes}`);
}

mostrarInfo("computacion");
mostrarInfo("dibujo");
mostrarInfo("biologia");
mostrarInfo("teatro");


cantidadClases("juan");
cantidadClases("sofia");
cantidadClases("flor");
cantidadClases("pedro");*/

//PROBLEMA 3

/*let materias = {
		biologia: ["Martin","pedro","juan","flor","agustina"],
		computacion: ["Rodich","pedro","juan","flor","sofia"],
		dibujo: ["Marchini","pedro","juan","agustina","sofia"],
		teatro: ["Salinas","pedro","flor","agustina","sofia"]
	}

const incribir = (alumno,materia) => {
	alumnos = materias[materia];
	if(alumnos.length >= 20){
		console.log(`Lo siento ${alumno}, las clases de ${materia} ya estan llenas.`);
	}
	else {
		console.log(`Lista de clase de ${materia}: ${materias[materia]}`);
		alumnos.push(alumno);
		if(materia == "biologia"){
			materias = {
				biologia: alumnos,
				computacion: materias['computacion'],
				dibujo: materias['dibujo'],
				teatro: materias['teatro']
			}
		}
		else if(materia == "computacion"){
			materias = {
				biologia: materias['biologia'],
				computacion: alumnos,
				dibujo: materias['dibujo'],
				teatro: materias['teatro']
			}
		}
		else if(materia == "dibujo"){
			materias = {
				biologia: materias['biologia'],
				computacion: materias['computacion'],
				dibujo: alumnos,
				teatro: materias['teatro']
			}
		}
		else if(materia == "teatro"){
			materias = {
				biologia: materias['biologia'],
				computacion: materias['computacion'],
				dibujo: materias['dibujo'],
				teatro: alumnos
			}
		}
		console.log(`Felicidades ${alumno} te has inscripto a ${materia} correctamente
Lista de clase actualizada: ${materias[materia]}`);
	}
}

incribir("juana", "dibujo");*/

//CONSOLE 

/*let frase = "Estamos en un nuevo dia programando yupi";

console.log(frase);

if(frase.includes("hola")){
	console.error("Esta frase deberia ser ilegal");
}else{
	console.warn("Cuidado con lo que andas programando");
}*/
// let tabla = [1,2,3,4,5,6];
// console.table(tabla);

// console.count()
// console.count()
// console.countReset()
// console.count()

// console.log("%cHOLA","color:blue;background:black;padding:20px 50px;font-size:30px;border:3px solid blue")

//HISTORIA COFLA 5

/*let examenes = prompt("Escriba su promedio: ");
let asistencia = prompt("Escriba la cantidad de clases asistidas");
let trabajosEntregados = prompt("Escriba la cantidad de trabajos entregados");

if(examenes < 7){ 
	console.log("%cDesaprobaste los examenes","color:red;");
}
else{ 
	console.log("%cAprobaste los examenes Cofla, felicidades!","color:green;");
}

let asisTot = 180 * 0.9;
if(asistencia < asisTot){ 
	console.log("%cNo tenes la asistencia suficiente","color:red;");
}
else{ 
	console.log("%cAsististe con regularidad Cofla, felicidades!","color:green;");
}

if(trabajosEntregados < 15){ 
	console.log("%cNo entregaste el 75% de los trabajos","color:red;");
}
else{ 
	console.log("%cEntregaste el 75% de los trabajos Cofla, felicidades!","color:green;");
}*/

//***DOM***

// document.write(document.querySelector(".separador"));
// document.write(document.getElementById("nav"));

// let rango = document.querySelector(".rangoDeEdad");

// rango.setAttribute("type", "range");

// document.write(rango.getAttribute("type"));

// rango.removeAttribute("type", "range")

// const titulo = document.querySelector(".titulo");

// titulo.setAttribute("contentEditable", "true");
// titulo.setAttribute("hidden",true)

// titulo.setAttribute("tabindex","0");
// titulo.setAttribute("title","este es un texto editable");

let rta;

do{
	rta = prompt('Quiere agregar una tarea a la lista?(s/n)');
	if(rta=='s'){
		crearTarea();
	}
}while(rta === 's');