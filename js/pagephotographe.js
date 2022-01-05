const id = new URLSearchParams(document.location.search).get("id");
console.log("ID : " + id);

//dom
const gallery = document.querySelector ("#gallery");
const hautdepage = document.querySelector ("#hautdepage");

// lire le json 
fetch("../database/photographe.json")
  .then((response) => response.json())
  .then((data) =>{
    
    //le json
    const media = data.media;
    const photographes = data.photographers;
    let photographe = null;

    for (let photog of photographes) {
      if (photog.id === parseInt(id)) {
        photographe = photog;
        break;
      }
    }

  //HEADER DYNAMIQUE 
    //contenant photographe ----------------------------¤
    const heade = document.createElement("div");
    heade.classList.add("photographepage");

    //photographe ----------------------------¤
    const contenant = document.createElement("div");
    contenant.classList.add("photographepage__content");

    //nom du photographe ----------------------------¤
    const nomph = document.createElement("h1");
    nomph.classList.add("photographepage__title");
    nomph.innerText = photographe.name;

    //localisation du photographe ----------------------------¤
    const localisation = document.createElement("p");
    localisation.classList.add("photographepage__localisation");
    localisation.innerText = photographe.city;

    //phrase du photographe ----------------------------¤
    const phrase = document.createElement("p");
    phrase.classList.add("photographepage__tagline");
    phrase.innerText = photographe.tagline;

    //taglist du photographe ----------------------------¤
    const taglist = document.createElement("ul");
    taglist.classList.add("photographepage__taglist");

    // tags du photographe 1
    const taglist1 = document.createElement("li");
    taglist1.classList.add("photographepage__tags");
    taglist1.innerText = photographe.tags[0];

    // tags du photographe 2
    const taglist2 = document.createElement("li");
    taglist2.classList.add("photographepage__tags");
    taglist2.innerText = photographe.tags[1];

    // tags du photographe 3
    const taglist3 = document.createElement("li");
    taglist3.classList.add("photographepage__tags");
    taglist3.innerText = photographe.tags[2];

    //btn contact
    const button = document.createElement("button");
    button.classList.add("photographepage__button");
    button.innerHTML = "Contactez-moi";
    // lancement modal contact
    button.addEventListener("click", launchModal);

    //portrait du photographe ----------------------------¤
    const portrait = document.createElement("img");
    portrait.classList.add("photographepage__photo");
    portrait.src = `${photographe.portrait}`;

    // tout dans heade ------------------------¤
    heade.appendChild(contenant);
    heade.appendChild(nomph);
    heade.appendChild(localisation);
    heade.appendChild(phrase);
    heade.appendChild(taglist);
    heade.appendChild(taglist1);
    heade.appendChild(taglist2);
    heade.appendChild(taglist3);
    heade.appendChild(button);
    heade.appendChild(portrait);
    //tout dans contenant --------------------¤
    contenant.appendChild(nomph);
    contenant.appendChild(localisation);
    contenant.appendChild(phrase);
    contenant.appendChild(taglist);
    contenant.appendChild(taglist1);
    
    taglist.appendChild(taglist2);
    taglist.appendChild(taglist3);
    taglist.appendChild(taglist1);
    //head dans dom -------------------------¤
    hautdepage.appendChild(heade);

    // lien id -> photograperid
    const mimi = [];

    // boucle lien (id -> photograperid)
    for (let photo of media) {
      if (photo.photographerId === parseInt(id)) {
        mimi.push(photo);
      }
    }
    // page dynamique
    for (let medias of mimi) {
      // contenant des photographe ----------------------------¤
      const carte = document.createElement("div");
     
      carte.classList.add("photographegallery__card");

      //lien lightbox image -----------------------------------¤
      const imagepourlightbox = document.createElement("a");
      imagepourlightbox.href = `${medias.photo}`;
      imagepourlightbox.classList.add("photographegallery__photop1");
      imagepourlightbox.classList.add("arr");

      //image photographe -------------------------------------¤
      const images = document.createElement("img");
      images.src = `${medias.image}`;
      images.classList.add("photographegallery__photop");
      
      //lightbox
       const lightbox = document.querySelector("#lightbox");
       const lightboxopen = document.querySelector(".photographegallery__photop");
       const close = document.querySelector("#close1");
       const links = document.querySelectorAll(".photographegallery img");
      
       //boucle pour lightbox
       for (let link of links) {
        //evenement du clic
         link.addEventListener("click", function (e) {
           
           //desactivation liens
           e.preventDefault();
           //ajout image par click
           const imageL = lightbox.querySelector(".lightbox__contenant img");
           imageL.src = this.src;
           console.log(link)
           //affiche lightbox
           lightbox.classList.add("show");
         });

         // ferme lightbox
         close.addEventListener("click", function () {
           lightbox.classList.remove("show");
         });

         // ferme lightbox clic exterieur
         lightbox.addEventListener("click", function () {
           lightbox.classList.remove("show");
         });
       }
        
      const videos = document.createElement("video");
      videos.src = `${medias.video}`;
      videos.classList.add("photographegallery__photop");

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
      coeur.classList.add("far", "fa-heart", "coeur");
      
      //coeur plein 
      //const coeurplein = document.createElement("i")
      //coeurplein.classList.add("fas", "fa-heart","coeurplein")
      //tout dans carte
      
      carte.appendChild(images);
      carte.appendChild(footer);
      carte.appendChild(titre);
      carte.appendChild(btn);
      carte.appendChild(like);
      carte.appendChild(coeur);
     // carte.appendChild(coeurplein);
      carte.appendChild(nombre);

      //btn et nombre dans like
      btn.appendChild(coeur);
      //btn.appendChild(coeurplein)
      like.appendChild(nombre);
      
      // like et titre dans footer
      footer.appendChild(titre);
      footer.appendChild(like);
      footer.appendChild(btn);
      
      //--------------------------------------¤
      
      //photo dans gallery (DOM)
      gallery.appendChild(carte);
    }

    const dropdowntitres = document.querySelector("#dropdownMenu");
    dropdowntitres.addEventListener("change", function (e) {
      console.log(e.target.value);
      if (e.target.value === "title") {
         media.sort(function (a, b) {
           if (a.name > b.name) {
             return 1;
           }
           if (a.name < b.name) {
             return -1;
           }
           return 0;
         });
      } else if (e.target.value === "popularity") {
      } else if (e.target.value === "date") {
      } else {
      }
     
    });

    // function trie(){
    //media.sort(function (a, b) {
    // if (a.name > b.name) {
    //return 1;
    // }
    // if (a.name < b.name) {
    // return -1;
    //}
    //return 0;
    //});
    //}

    console.log(dropdowntitres);
  }).catch((err) => {
  console.log(err);})

  

  