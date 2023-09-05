const formulario = document.getElementById("form")

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fecha_nacimiento").value;

    const datosPersonales = {
        nombre: nombre,
        apellido: apellido,
        fecha_nacimiento : fechaNacimiento,
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
    method: "POST",
    body: JSON.stringify(datosPersonales),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json())
    .then(data => {
    
        console.log("Respuesta del servidor:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
});


  
 