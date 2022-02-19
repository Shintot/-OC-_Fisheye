const id = new URLSearchParams(document.location.search).get("id");
console.log("ID : " + id);

// ---- DOM
const gallery = document.querySelector ("#gallery");
const hautdepage = document.querySelector ("#hautdepage");

// ----  LIRE LE JSON
fetch("../database/photographe.json")
  .then((response) => response.json())
  .then((data) =>{
    // ---- LE JSON
    const media = data.media;
    const photographes = data.photographers;

    // ---- PHOTO PORTRAIT DU PHOTOGRAPHE
    let photographe = null;
    for (let photog of photographes) {
      if (photog.id === parseInt(id)) {
        photographe = photog;
        break;
      }
    }

    // ---- HEADER DYNAMIQUE

    //HEADER PHOTOGRAPHE ----------------------------¤
    const heade = document.createElement("div");
    heade.classList.add("photographepage");
    

    // CONTENANT PHOTOGRAPHE  ----------------------------¤
    const contenant = document.createElement("div");
    contenant.classList.add("photographepage__content");

    //NOM DU PHOTOGRAPHE ----------------------------¤
    const nomph = document.createElement("h1");
    nomph.classList.add("photographepage__title");
    nomph.innerText = photographe.name;

    //LOCALISATION DU PHOTOGRAPHE ----------------------------¤
    const localisation = document.createElement("p");
    localisation.classList.add("photographepage__localisation");
    localisation.innerText = photographe.city;

    //PHRASE DU PHOTOGRAPHE  ----------------------------¤
    const phrase = document.createElement("p");
    phrase.classList.add("photographepage__tagline");
    phrase.innerText = photographe.tagline;

    //TAGLIST DU PHOTOGRAPHE ----------------------------¤
    const taglist = document.createElement("ul");
    taglist.classList.add("photographepage__taglist");

    // tags du photographe 3

    for (let tag of photographe.tags) {
      const taglist3 = document.createElement("li");
      taglist3.classList.add("photographepage__tags");
      taglist3.innerText = tag;
      taglist.appendChild(taglist3);
    }

    //BTN CONTACT
    const button = document.createElement("button");
    button.classList.add("photographepage__button");
    button.innerHTML = "Contactez-moi";
    button.tabIndex = 3
    // LANCEMENT MODAL CONTACT
    button.addEventListener("click", launchModal);

    //PORTRAIT DU PHOTOGRAPHE ----------------------------¤
    const portrait = document.createElement("img");
    portrait.classList.add("photographepage__photo");
    portrait.src = `${photographe.portrait}`;


    //HIERARCHIE

    // DANS HEADER ------------------------¤
    heade.appendChild(contenant);
    heade.appendChild(nomph);
    heade.appendChild(localisation);
    heade.appendChild(phrase);
    heade.appendChild(taglist);
    heade.appendChild(button);
    heade.appendChild(portrait);
    

    // DANS LES CONTENANT -----------------------¤
    contenant.appendChild(nomph);
    contenant.appendChild(localisation);
    contenant.appendChild(phrase);
    contenant.appendChild(taglist);
    
    // DANS DOM -------------------------¤
    hautdepage.appendChild(heade);

    // lien id -> photograperid
    const mimi = [];
    console.log(mimi)

    // boucle lien (id -> photograperid)
    for (let photo of media) {
      if (photo.photographerId === parseInt(id)) {
        mimi.push(photo);
      }
    }
    let liketotalcalcul = [];
    for (let i = 0; i < mimi.length; i++) {
      let likeunique = mimi[i].likes;
      liketotalcalcul.push(likeunique);
    }

    let totaldeslikes = 0;
    for (let like of liketotalcalcul) {
      totaldeslikes = totaldeslikes + like;
    }
    console.log(totaldeslikes);

    //TOTAL LIKE
    const like = document.querySelector(".like")
    const total = document.createElement("div");
    total.classList.add("totallike");
    const totalcontenant = document.createElement("div");
    totalcontenant.classList.add("totallike__contenant");
    const totaldeslike = document.createElement("p");
    totaldeslike.classList.add("totallike__totaldelike");
    totaldeslike.innerText = totaldeslikes; 

    const coeurtotal = document.createElement("i");
    coeurtotal.classList.add("fas", "fa-heart");
    const prix = document.createElement("p");
    prix.classList.add("totallike__prix");
    prix.innerText = `${photographe.price}€/jour`;

    total.appendChild(totalcontenant);
    total.appendChild(coeurtotal);
    total.appendChild(prix);
    totalcontenant.appendChild(totaldeslike);
    totalcontenant.appendChild(coeurtotal);
    like.appendChild(total)
    
    // PAGE DYNAMIQUE
    displayMedias(mimi);

    // MENU TRIE
    const dropdowntitres = document.querySelector("#dropdownMenu");
    dropdowntitres.tabIndex = 4;
    dropdowntitres.addEventListener("change", function (e) {
      if (e.target.value === "title") {
        mimi.sort(function (a, b) {
          if (a.photoName > b.photoName) {
            return 1;
          }
          if (a.photoName < b.photoName) {
            return -1;
          }
          return 0;
        });

        gallery.innerHTML = "";
        displayMedias(mimi);
      } else if (e.target.value === "popularity") {
        mimi.sort(function (a, b) {
          return b.likes - a.likes;
        });

        gallery.innerHTML = "";
        displayMedias(mimi);
      } else if (e.target.value === "date") {
        console.log(mimi);
        mimi.sort(function (a, b) {
          var dateA = new Date(a.date);
          var dateB = new Date(b.date);
          return dateA - dateB;
        });

        gallery.innerHTML = "";
        displayMedias(mimi);
      }
    });
  }).catch((err) => {
  console.log(err);})


  function displayMedias(mimi){
   for (let medias of mimi) {
     // contenant des photographe ----------------------------¤
     const carte = document.createElement("div");
     carte.classList.add("photographegallery__card");

     const pourlightbox = document.createElement("div");
     pourlightbox.classList.add("photographegallery__contenantlightbox");

     //image photographe -------------------------------------¤
     const images = document.createElement("img");
     images.src = `${medias.image}`;
     images.tabIndex = 5;
     images.classList.add("photographegallery__photop");

     /*const videos = document.createElement("video");
     videos.tabIndex = 5;
     const source = document.createElement("source")
     source.setAttribute("src", `${medias.video}`); 
     videos.appendChild(source)
     videos.classList.add("photographegallery__photop");*/

     //LIGHTBOX
     const light = document.querySelectorAll(
       ".photographegallery .photographegallery__contenantlightbox"
     );
     const lightbox = document.querySelector("#lightbox");
     const lightboximg = lightbox.querySelector(".lightbox__img");
     const close = lightbox.querySelector(".lightbox__close");

     for (let i = 0; i < light.length; i++) {
       let newindex = i;
       light[i].onclick = () => {
         console.log(i);
         function preview() {
           let selectedImgUrl = light[newindex].querySelector("img").src;
           lightboximg.src = selectedImgUrl;
           console.log(selectedImgUrl);
         }

         //BOUTON
         const btnback = document.querySelector(".lightbox__back");
         const btnnext = document.querySelector(".lightbox__next");
         btnback.onclick = () => {
           newindex--;
           if (newindex == 0) {
             preview();
             btnback.style.display = "none";
           } else {
             preview();
             btnback.style.display = "block";
           }
         };

         btnnext.onclick = () => {
           newindex++;
           if (newindex >= light.length - 1) {
             preview();
             btnnext.style.display = "none";
           } else {
             preview();
           }
         };

         preview();
         lightbox.classList.add("show");

         close.onclick = () => {
           btnback.style.display = "block";
           btnnext.style.display = "block";
           lightbox.classList.remove("show");
         };
       };
     }

     //footer ---------------- ------------------------------¤
     const footer = document.createElement("footer");
     footer.classList.add("photographegallery__footer");

     //titre -----------------------------------------¤
     const titre = document.createElement("p");
     titre.classList.add("photographegallery__figcaption");
     titre.innerText = medias.photoName;

     // contenant bouton like ----------------------------¤
     const like = document.createElement("div");
     like.classList.add("photographegallery__like");

     //nombre like -----------------------------------------¤
     const nombre = document.createElement("p");
     nombre.classList.add("photographegallery__chiffre");
     nombre.innerText = medias.likes;

     //btn like -----------------------------------------¤
     const btn = document.createElement("div");
     btn.classList.add("photographegallery__section-button");

     //coeur -----------------------------------------¤
     const coeur = document.createElement("i");
     coeur.tabIndex = 5;
     coeur.classList.add("far", "fa-heart", "fa-2x", "coeur");
     coeur.addEventListener("click", function () {
       const valeur = document.querySelector(".totallike__totaldelike");
       console.log(valeur);
       const totalvaleur = parseInt(valeur.innerText) + 1
       valeur.innerText = totalvaleur;
       coeur2.classList.add("show");
       afficher();
     });

     const coeur2 = document.createElement("i");
     coeur2.tabIndex = 5;
     coeur2.classList.add("fas", "fa-heart", "fa-2x", "coeur2");

     coeur2.addEventListener("click", function () {
       
       console.log(valeur)
       coeur2.classList.remove("show");
       valeur++;
       afficher();
     });

     function afficher() {
       var valeur = 0;
       var message = "<b>" + valeur + (valeur > 1 ? "s" : "") + "</b>";
       totaldeslikes.innerHTML = message;
     }

     function initEventHandlers() {
       valeur = 0;
       bumpedB = document.getElementById("bumped");
       bumpedB.addEventListener("click", bumped, false);

       affichage = document.getElementById("affichage");
       afficher();
     }

     window.addEventListener("load", initEventHandlers, false);

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

  

  