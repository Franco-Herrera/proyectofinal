const precioBaseCorreo = 200
const precioHasta5 = 300
const precioHasta15 = 700
const precioHasta30 = 1200
const IVA = 1.21
const envioNacional = 1.25
const envioInternacional = 1.50

function envioCorreo (NombreDeUsuario){

    let cuentaPeso = 0 ;

    let resultado = 0 ;

    let pesoPaquete = parseInt(prompt("de cuanto kilos es el peso del paquete a enviar?"))

    if(pesoPaquete >=1 && pesoPaquete <= 5){
        cuentaPeso = precioBaseCorreo + precioHasta5
    }
    else if(pesoPaquete >=6 && pesoPaquete <= 15){
        cuentaPeso = precioBaseCorreo + precioHasta15

    }
    else if(pesoPaquete >=16 && pesoPaquete <= 30){
        cuentaPeso = precioBaseCorreo + precioHasta30
    
    }   
    alert( " el recargo por el peso es de $" + cuentaPeso)
    
    let claseEnvio = prompt("Su envio es de clase nacional o internacional?").toLowerCase() 
    if(claseEnvio == "nacional"){
        resultado = (cuentaPeso * envioNacional * IVA)
    }
    else if(claseEnvio == "internacional"){
        resultado = (cuentaPeso * envioInternacional * IVA)
    }
    
    alert ( NombreDeUsuario + " " + ApellidoDeUsuario + " , el precio de tu envio es de $ " + resultado + " (IVA incluido)")
}
let NombreDeUsuario = prompt ("dinos tu nombre")
let ApellidoDeUsuario = prompt ("dinos tu apellido")
envioCorreo (NombreDeUsuario)