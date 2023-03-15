window.addEventListener("DOMContentLoaded", () => {
  // crear todas las referencias del formulario
  const formTitulo = document.getElementById("form-titulo");
  const formPensamiento = document.getElementById("form-pensamiento");
  const formNombre = document.getElementById("form-nombre");
  const formFondo = document.getElementsByName("fondo-type").checked;
  console.log(formFondo);
  // const formIcono = document.getElementsByName("ico-type");
  const formCrear = document.querySelector("#btn-crear");
  const formRandom = document.querySelector("#btn-random");
  const Result = document.querySelector(".xresult");
  const allInputs = document.querySelectorAll("input");
  //  console.log(Result);
  // Fecha
  date = new Date();
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDate();
  const today = (document.getElementById("current_date").innerHTML =
    day + "/" + month + "/" + year); // En el HTML donde esta la fecha ahora hay un id que se llama "current date"

  //Seleccionar fondo obligatorio
  //Seleccionar icono obligatorio
  // Botón Crear
  // Botón Random
  // Container

  // Para quitar el ! del form
  allInputs.forEach((input) => {
    input.addEventListener("change", () => {
      input.classList.remove("is-invalid");
    });
  });

  // hacer boton de configuracion con los datos del formulario
  formCrear.addEventListener("click", (event) => {
    event.preventDefault(); // Para prevenir el comportamiento por defecto
    const Titulo = formTitulo.value;
    const Pensamiento = formPensamiento.value;
    const Nombre = formNombre.value;
    // const Fondo = formFondo.checked;
    //Titulo obligatorio
    if (Titulo === "") {
      formTitulo.classList.add("is-invalid");
    }
    //Pensamiento obligatorio
    if (Pensamiento === "") {
      formPensamiento.classList.add("is-invalid");
    }
    //Nombre opcional
    if (Nombre === "") {
      formNombre.value = "Anonimo";
    }
    // console.log(Titulo);
    // console.log(Pensamiento);
    if (Titulo !== "" && Pensamiento !== "") {
      formTitulo.classList.remove("is-invalid");
      formPensamiento.classList.remove("is-invalid");
      Result.innerHTML = ` 
      <div id="result" class="xresult ">
      <i class="mt-5 xico-card fa-regular fa-comment"></i>
      <h2 class="pt-3 xtitulo-card" id="TituloCreado">${Titulo}</h2>
      <h3 class="pb-3 xfecha-card" id="current_date">${today}</h3>
      <div class="xpensamiento-card" id="PensamientoCreado">
        <figure>
          <blockquote class="blockquote pe-3 ps-3 xp-card">
            <p>${Pensamiento}</p>
          </blockquote>
          <figcaption class="blockquote-footer mt-3 xcita-card">
            ATTE:
            <cite title="nombre" class="xcita-card2" id="NombreCreado"
              >${Nombre}</cite
            >
          </figcaption>
        </figure>
      </div>
    </div>`;
      formTitulo.value = "";
      formPensamiento.value = "";
      formNombre.value = "";
    }

    // const Icono = formIcono.checked;
  });

  // hacer boton de random
});
