const fn2 = () => {
    var multiplos = []
    var cont = 6
    var i = 1
    do {
        cont = cont + 1
        if (mult(cont, 7)) {
            if (mult(cont, 2) || mult(cont, 3) || mult(cont, 5)) {
                continue;
            } else {
                multiplos.push(cont)
                i = i + 1
            }
        }
    } while (i != 50)
    alert("Multiplos de 7 (pero no de 2, 3, 5)   "+ multiplos)
}
const mult = (a, b) => { let div = a % b
if (div != 0) { return false} else { return true;} }