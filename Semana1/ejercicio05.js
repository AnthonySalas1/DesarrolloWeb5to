const fn5 = () => {
  let numero = prompt("Espacios a desplazar");
  var salir = "n";
  let numeros = [];
  while (salir == "n") {
    num = prompt("Ingrese un número");
    if (numero != null) {
      numeros.push(num);
    }
    var seguir = confirm("Desea ingresar mas numeros?");
    if (seguir == false) {
      salir = "y";
    }
  }
  console.log(numeros);
  let indice = numeros.indexOf(numero) + 1;
  for (let i = 0; i < indice; i++) {
    const x = numeros.shift();
    numeros.push(x);
  }
  alert("Resulado : "+numeros);
};

