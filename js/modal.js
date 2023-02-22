
  //dom
  const modal = document.querySelector("#modal");
  const closeModalBtn = document.querySelector("#close");
  closeModalBtn.tabIndex = 1;
  closeModalBtn.focus();
// close modal
  closeModalBtn.addEventListener("click", closeModal);
  closeModalBtn.addEventListener("keyup", function(event) {
    closeModalBtn.focus()
    if(event.key === 'Escape') {
      modal.style.display = "none";
    }
    if (event.key === "Enter") {
      modal.style.display = "none";
    }
  });

 function launchModal() {
   modal.style.display = "block";

   // NAVIGATION CLAVIER
  
   const prenom = document.querySelector("#firstname");
   prenom.tabIndex = 2;
   
    const nom = document.querySelector("#lastname");
   nom.tabIndex = 3;
   
   const email = document.querySelector("#email");
   email.tabIndex = 4;  
   const message = document.querySelector("#story");
   message.tabIndex = 5;
  const submit = document.querySelector("#submit");
  submit.tabIndex = 6;
   

 }
  function closeModal() {
    modal.style.display = "none";
    
  }

  // validation  ----------------------------------------------------------------
  document.querySelector("#contact").addEventListener("submit", function (e) {
    e.preventDefault();
    let prenom = document.querySelector("#firstname");
    let nom = document.querySelector("#lastname");
    let email = document.querySelector("#email");
    
    //Regex
    const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ---_]+$/;
    const regexemail = /^\S+@\S+\.\S+$/;

    const errPrenom = document.querySelector("#erreur_prenom");
    const errNom = document.querySelector("#erreur_nom");
    const erremail = document.querySelector("#erreur_email");

    if (!prenom.value.match(regex)) {
      errPrenom.textContent = "veuillez renseigner un prenom";
      prenom.classList.add("form_erreur");
    } else {
      prenom.classList.add("form_valid");
      errPrenom.textContent = "";
    }

    if (!nom.value.match(regex)) {
      errNom.textContent = "veuillez renseigner un nom";
      nom.classList.add("form_erreur");
    } else {
      nom.classList.add("form_valid");
      errNom.textContent = "";
    }

    if (!email.value.match(regexemail)) {
      erremail.textContent = "veuillez renseigner un email";
      email.classList.add("form_erreur");
    } else {
      email.classList.add("form_valid");
      erremail.textContent = "";
    }

    if (nom.value && prenom.value && email.value) {
      const submit = document.querySelector("#submit");
      submit.addEventListener("click", closeModal)    }
  });
