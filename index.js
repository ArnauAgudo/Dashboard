
  const divEmails = document.querySelectorAll(".divemail");

  for (let i = 0; i < divEmails.length; i++) {
    divEmails[i].addEventListener("click", function () {
      
      divEmails[i].classList.toggle("seleccionado");
    });
  }
