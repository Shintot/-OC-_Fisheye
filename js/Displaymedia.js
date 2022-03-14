function displayMedias(mimi) {
  //console.log(mimi)
  for (let medias of mimi) {
    // CONTENANT DES PHOTOGRAPHES -------------------------------------------¤
    const carte = document.createElement("div");
    carte.classList.add("photographegallery__card");

    const pourlightbox = document.createElement("div");
    pourlightbox.classList.add("photographegallery__contenantlightbox");

    const images = factory(medias);

    //FOOTER ---------------------------------------------------------¤
    const footer = document.createElement("footer");
    footer.classList.add("photographegallery__footer");

    //TITRE ----------------------------------------------------------¤
    const titre = document.createElement("p");
    titre.classList.add("photographegallery__figcaption");
    titre.innerText = medias.photoName;

    //CONTENANT BOUTON LIKE ------------------------------------------¤
    const like = document.createElement("div");
    like.classList.add("photographegallery__like");

    //NOMBRE LIKE ----------------------------------------------------¤
    const nombre = document.createElement("p");
    nombre.classList.add("photographegallery__chiffre");
    nombre.innerText = medias.likes;

    //BTN LIKE -------------------------------------------------------¤
    const btn = document.createElement("div");
    btn.classList.add("photographegallery__section-button");

    //COEUR VIDE  ----------------------------------------------------¤
    const coeur = document.createElement("i");
    coeur.tabIndex = 5;
    coeur.classList.add("far", "fa-heart", "fa-2x", "coeur");

    //PLUS UN AU CLIC ET AJOUTE COEUR PLEIN ----
    coeur.addEventListener("click", function () {
      plusun();
    });
    coeur.addEventListener("keyup", function () {
      plusun();
    });

    function plusun() {
      const valeur = document.querySelector(".totallike__totaldelike");
      const totalvaleur = parseInt(valeur.innerText) + 1;
      valeur.innerText = totalvaleur;
      //PLUS UN AU LIKE DE LA PHOTO
      const nombredelike = parseInt(nombre.innerText) + 1;
      nombre.innerText = nombredelike;
      coeur2.classList.add("show");
    }

    //COEUR PLEIN  ----------------------------------------------------¤
    const coeur2 = document.createElement("i");
    coeur2.tabIndex = 5;
    coeur2.classList.add("fas", "fa-heart", "fa-2x", "coeur2");

    //MOINS UN AU CLIC ET AJOUTE COEUR VIDE ----
    coeur2.addEventListener("click", function () {
     moinsun();
    });
    coeur2.addEventListener("keyup", function () {
      moinsun();
    });

    function moinsun (){
       const moinsUn = document.querySelector(".totallike__totaldelike");
       const totalMoinUn = parseInt(moinsUn.innerText) - 1;
       moinsUn.innerText = totalMoinUn;
       // MOINS UN AU LIKE DE LA PHOTO
       const moinUnAuLikePhoto = parseInt(nombre.innerText) - 1;
       nombre.innerText = moinUnAuLikePhoto;
       coeur2.classList.remove("show");
    }

    carte.appendChild(pourlightbox);
    //carte.appendChild(videos);
    carte.appendChild(footer);
    carte.appendChild(titre);
    carte.appendChild(btn);
    carte.appendChild(like);
    carte.appendChild(coeur);
    carte.appendChild(coeur2);
    carte.appendChild(nombre);
    //btn et nombre dans like
    pourlightbox.appendChild(images);
    btn.appendChild(coeur);
    btn.appendChild(coeur2);
    //btn.appendChild(coeurplein)
    like.appendChild(nombre);
    // like et titre dans footer
    footer.appendChild(titre);
    footer.appendChild(like);
    footer.appendChild(btn);
    //photo dans gallery (DOM)
    gallery.appendChild(carte);
  }
}