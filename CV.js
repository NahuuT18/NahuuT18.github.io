
document.getElementById("boton").addEventListener('click', function () {
    console.log("Click aqui para ver otros datos")
document.getElementById("datos").innerHTML ="Alta capacidad resolutiva <br> Páginas web dinámicas <br> Solución creativa a problemas <br> Gestión de sitios web <br> Diseño de páginas web corporativas"
})


function changeColor() {
    const color = document.getElementById("b1").style.backgroundColor;
    switch (color){
      case "":
        document.getElementById("b1").style.backgroundColor = "red";
        break;
      case "red":
        document.getElementById("b1").style.backgroundColor = "blue";
        break;
        case "blue":
        document.getElementById("b1").style.backgroundColor = "white";
        break;
    }
  }