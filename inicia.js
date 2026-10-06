//prueba1

  const tarjetas = document.querySelectorAll('.card');

  
  tarjetas.forEach(function(tarjeta) {
    tarjeta.addEventListener('click', function() {
    
      this.style.backgroundColor = '#ffcc00';
      this.style.color = '#333';
    });
  });


  //prueba2
function calcularAlquiler() {

    let precio = parseFloat(document.getElementById("cboZona").value);
    let horas = parseInt(document.getElementById("txtMetros").value);


    let adicional = 0;
    if (document.getElementById("rbMet").checked) {
        adicional = 20;
    } else {
        adicional = 0;
    }

    let costoHora = precio + adicional;
    let subtotal = costoHora * horas;
    let descuento = 0;

    if (horas >= 4) {
        descuento = subtotal * 0.15;
    } else if (horas >= 2) {
        descuento = subtotal * 0.10;
    } else {
        descuento = 0;
    }

    let total = subtotal - descuento;

    document.getElementById("txtSubtotal").value = subtotal;
    document.getElementById("txtDescuento").value = descuento;
    document.getElementById("txtTotal").value = total;
}
function ReiniciarAlquiler() {

    document.getElementById("cboZona").value = "1000";
    document.getElementById("txtMetros").value = "1";
    document.getElementById("rbDFor").checked = true;
    document.getElementById("txtSubtotal").value = "";
    document.getElementById("txtDescuento").value = "";
    document.getElementById("txtTotal").value = "";
}