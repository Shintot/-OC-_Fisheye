
const modal = document.querySelector("#modal");
const modalBtn = document.querySelector("#photographebutton");
const closeModalBtn = document.querySelector("#close")


// lancement modal
modalBtn.addEventListener("click",launchModal);

function launchModal() {
    modal.style.display = "block";
}

// close modal
closeModalBtn.addEventListener("click", closeModal);

function closeModal(){
    modal.style.display="none";
}

// validation  ----------------------------------------------------------------
document.querySelector("#contact").addEventListener("submit", function(e) {
   
    e.preventDefault();
    let prenom = document.querySelector("#firstname");
    let nom = document.querySelector("#lastname");
    let email = document.querySelector("#email");

    //Regex
        const regex=/^[a-zA-ZÀ-ÖØ-öø-ÿ---_]+$/;
        const regexemail = /^\S+@\S+\.\S+$/;

    const errPrenom=document.querySelector("#erreur_prenom")
    const errNom=document.querySelector("#erreur_nom")
    const erremail=document.querySelector("#erreur_email")

    if (!prenom.value.match(regex)) {
        errPrenom.textContent = "veuillez renseigner un prenom";
        prenom.classList.add ("form_erreur")
      }else {
        prenom.classList.add ("form_valid")
        errPrenom.textContent = "";
      }
    
      if (!nom.value.match(regex)) {
        errNom.textContent = "veuillez renseigner un nom";
        nom.classList.add ("form_erreur")
      }else {
        nom.classList.add ("form_valid")
        errNom.textContent = "";
      }
    
      if (!email.value.match(regexemail)) {
        erremail.textContent = "veuillez renseigner un email";
        email.classList.add ("form_erreur")
      }else {
        email.classList.add ("form_valid")
        erremail.textContent = "";
      }

      if (nom.value && prenom.value && email.value) {
         alert ("c'est bon")
        
      } 
})