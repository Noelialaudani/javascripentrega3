function carrito(cantidadMatesAcero,cantidadMateMadera) {
    const montoFinal=(cantidadMatesAcero *2000)/2+cantidadMateMadera*1500
    return montoFinal
  }

alert('Agrega tus productos al carrito!Mates de acero 50%off')
    const cantidadMatesAcero = parseFloat(prompt('Cuántos Mates de Acero quiere agregar al carrito?'))
    const cantidadMateMadera = parseFloat(prompt('Cuántos Mates de Vidrio quiere agregar al carrito?'))
    const resultado = carrito(cantidadMatesAcero,cantidadMateMadera)

  alert('El total de tu pedido es $'+ resultado +' Muchas gracias por tu compra! Que lo disfrutes')


  class ProductoPersonalizado {
    constructor(nombre, precio) {
      this.nombre = nombre
      this.precio = precio
    }
  }
  
  const queresPersonalizado = parseInt(prompt('Te gustaria un producto personalizado?'))
  let cantPersonalizado=3

  if (queresPersonalizado==='si') {
  
    for (let i = 0; i < cantPersonalizado; i++) {
      const nombre = prompt("Que producto te gustaria personalizar?")
      const diseño = parseFloat(prompt('Con que diseño lo hacemos?'))
      const prod = new ProductoPersonalizado(nombre, diseño)
      carrito.push(prod)
    }
    console.log(carrito)
  } else {
    alert(`Bueno, si en algun momento necesitas un personalizado podes contactarnos!`)
  }









const cantidadRegalosDisponibles=3

for (let cantRegalosEnCarrito=0;cantRegalosEnCarrito<cantidadRegalosDisponibles;cantRegalosEnCarrito=cantRegalosEnCarrito+1){
      alert('Tenes un regalo para sumar a tu carrito!')
      alert('Sumaste '+(cantRegalosEnCarrito+1)+' a tu carrito!')
  }
  alert('Ya no quedan mas regalos :( Volve pronto!')

  const comoFueLaCompra= prompt('Te gusto tu compra?')
  if (comoFueLaCompra==='si'){
    alert('Nos alegra mucho!')
    }else { 
        alert('Lo sentimos mucho, esperamos mejorar')
    }








    