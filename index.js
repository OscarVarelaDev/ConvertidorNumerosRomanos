const btnenviar = document.getElementById("btn-enviar")
const btnReiniciar = document.getElementById("btn-reinciar")
btnenviar.addEventListener("click", function(){
    const numero = document.getElementById("numero").value
   romano(numero)
})
btnReiniciar.addEventListener("click", function(){
    document.getElementById("numero").value = ""
    document.getElementById("resultado").innerHTML = ""
})

const romano = (numero) => {
    const resultado = document.getElementById("resultado");
    let numeroRomano = ["M", "D", "C", "L", "X", "XI", "V", "VI", "I"]
    let numeroNormal = []
    //validar si es un numero
    if (isNaN(numero)) {
     return   resultado.innerHTML = "No es un numero"
    }
    for (let i = 0; i = numero; i++) {
        if(numero>=4000 ){
           return  resultado.innerHTML = "Numero demasiado grande"
        }
        
        else if (numero >=1000) {
            numeroNormal.push(numeroRomano[0])
            numero = numero - 1000
        }
        else if (numero >= 500) {
            numeroNormal.push(numeroRomano[1])
            numero = numero - 500
        }
        else if (numero >= 100) {
            numeroNormal.push(  numeroRomano[2])
            numero = numero - 100
        }
        else if (numero >= 50) {
            numero= numero - 50
            numeroNormal.push(numeroRomano[3])
        }
        else if (numero >= 10) {
            numeroNormal.push( numeroRomano[4]) 
            numero = numero - 10

        } else if (numero > 9) {
            numeroNormal.push(numeroRomano[5])
            numero = numero - 9

        }
        else if (numero >= 5) {
            numeroNormal.push(numeroRomano[6])
            numero = numero - 5

        }
        else if (numero >= 4) {
            numeroNormal.push(numeroRomano[7])
            numero = numero - 4

        }
        else if (numero >= 1) {
            numeroNormal.push(numeroRomano[8])
            numero = numero - 1


        }


    }  //mostar en html
   
    resultado.innerHTML = numeroNormal.join("")
}

