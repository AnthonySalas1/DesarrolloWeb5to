const fn3 = () => {
    let i = prompt("Ingrese la vental total:")
    comision(i)
}
const comision = (x) => {
    if (x > 400) {
        alert("COMISIÓN: " + ((x * 9) / 100) + 50)
    } else if (x > 150 && x <= 400){
        alert("COMISIÓN: " + (x * 10) / 100)
    } else {
        alert("COMISIÓN: 0 ")
    }
}