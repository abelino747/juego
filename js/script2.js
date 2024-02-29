let max = 100;
let min = 1;
let numeroAleatorio = Math.random() * (max - min) + min;
numeroAleatorio = parseInt(numeroAleatorio);

function adivinar() {
  let usuario = document.getElementById("numero");

  if (usuario.value > numeroAleatorio) {
    document.getElementById("res").innerHTML = `el numero es menor`;
    console.log("el numero es menor ");
  } else if (usuario.value < numeroAleatorio) {
    document.getElementById("res").innerHTML = `el numero es mayor`;
    console.log("el numero es mayor ");
  } else {
    console.log(` el numero era ${numeroAleatorio}, !!! Ganaste !!!`);
    console.log(usuario.value);
    console.log(numeroAleatorio);
    document.getElementById(
      "res"
    ).innerHTML = `el numero era ${numeroAleatorio}, !!! Ganaste !!!`;
  }
}



