//-	Desarrolle una función que permita determinar cuál 
//  de tres parámetros que se le proporcione a la función es mayor.


const fn1 = () => {
const num1 = prompt('Ingrese el 1er numero');
const num2 = prompt('Ingrese el 2do numero');
const num3 = prompt('Ingrese el 3er numero');
numMayor(num1,num2,num3)
}
const numMayor = (num1,num2,num3) => {
    if(num1>=num2 && num1>=num3 ){
        resultado.innerHTML = num1;
        document.write(resultado);
        alert(num1);
    }
    else if (num2>=num3 && num2>=num1){
        resultado.innerHTML = num2;
        document.write(resultado);
        alert(num2);
        
    }
    else{
        resultado.innerHTML = num3;
        alert(num3);    
    }
}
