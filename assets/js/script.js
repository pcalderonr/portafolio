let formulario = document.querySelector("form");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  let nombre = document.querySelector("#nombre").value;
  let correo = document.querySelector("#correo").value;
  let telefono = document.querySelector("#telefono").value;
  let comentario = document.querySelector("#comentario").value;
  formulario.style.display = "none";
  let agradecimiento = document.querySelector("#agradecimientos");
  agradecimiento.innerHTML = `<div class="row border border-info p-4 m-4">
            <div class="col-md-4 col-sm col-xs">
              <img src="./assets/img/contacto.jpg" alt="..." id="foto_paula">
            </div>
            <div class="col-md-8 col-sm col-xs">
              <h1>Gracias por contactarnos</h1>
                <h3 class="text-center">Gracias ${nombre} por tu mensaje "${comentario}", en breve te responderé a tu correo: ${correo}</h3>
            </div>  
          </div>`;
});

document
  .querySelectorAll(".navbar-nav li a:not(.dropdown-toggle)")
  .forEach((link) => {
    link.addEventListener("click", (event) => {
      var Element = event.target || event.srcElement;
      const nodeList = document.querySelectorAll(
        ".navbar-nav li a:not(.dropdown-toggle)"
      );
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.remove("active");
      }
      Element.classList.add("active");
      const navbarResponsive = document.getElementById("navbarNav");
      if (navbarResponsive.classList.contains("show")) {
        const navbarToggler = document.querySelector(".navbar-toggler");
        setTimeout(() => {
          navbarToggler.click();
        }, "200");
      }
    });
  });
