function jugar(eleccionUsuario) {
  const elecciones = ["piedra", "papel", "tijera"];
  const eleccionComputadora = elecciones[Math.floor(Math.random() * 3)];
  let resultado;
  if (eleccionUsuario === eleccionComputadora) {
    resultado = "¡Es un empate!";
  } else if (
    (eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
    (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
    (eleccionUsuario === "tijera" && eleccionComputadora === "tijera") ||
    (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
    (eleccionUsuario === "tijera" && eleccionComputadora === "papel")
  ) {
    resultado = "¡Ganaste!";
  } else {
    resultado = "¡La computadora ganó!";
  }
  document.getElementById("resultado").innerHTML = `
        Tu elección: ${eleccionUsuario}<br>
        Elección de la computadora: ${eleccionComputadora}<br>
        Resultado: ${resultado}
    `;
}
const p = new Promise(   (resolve, reject) => {
  
}

)