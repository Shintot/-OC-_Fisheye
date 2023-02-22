const id = new URLSearchParams(document.location.search).get("id");
console.log("ID : " + id);

 // REDIRIGE LE USER VIA HOME
document.addEventListener("keydown", function (event) {
  // Vérifier si la touche "Home" a été pressée
  if (event.key === "Home" || event.keyCode === 36) {
    // Rediriger l'utilisateur vers la page d'accueil
    location.href = "http://127.0.0.1:5500/index.html";
  }
});
 

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

    //HEADER PHOTOGRAPHE --------------------------------------------¤
    const heade = document.createElement("div");
    heade.classList.add("photographepage");

    // CONTENANT PHOTOGRAPHE  ---------------------------------------¤
    const contenant = document.createElement("div");
    contenant.classList.add("photographepage__content");

    //NOM DU PHOTOGRAPHE --------------------------------------------¤
    const nomph = document.createElement("h1");
    nomph.classList.add("photographepage__title");
    nomph.innerText = photographe.name;

    //LOCALISATION DU PHOTOGRAPHE -----------------------------------¤
    const localisation = document.createElement("p");
    localisation.classList.add("photographepage__localisation");
    localisation.innerText = photographe.city;

    //PHRASE DU PHOTOGRAPHE  ----------------------------------------¤
    const phrase = document.createElement("p");
    phrase.classList.add("photographepage__tagline");
    phrase.innerText = photographe.tagline;

    //TAGLIST DU PHOTOGRAPHE ----------------------------------------¤
    const taglist = document.createElement("ul");
    taglist.classList.add("photographepage__taglist");

    // TAGS DU PHOTOGRAPHE ------------------------------------------¤
    for (let tag of photographe.tags) {
      const taglist3 = document.createElement("li");
      taglist3.classList.add("photographepage__tags");
      taglist3.innerText = tag;
      taglist.appendChild(taglist3);
    }

    //BTN CONTACT ----------------------------------------------------¤
    const button = document.createElement("button");
    button.classList.add("photographepage__button");
    button.innerHTML = "Contactez-moi";
    button.tabIndex = 1;
    // LANCEMENT MODAL CONTACT
    button.addEventListener("click", launchModal);

    //PORTRAIT DU PHOTOGRAPHE ---------------------------------------¤
    const portrait = document.createElement("img");
    portrait.classList.add("photographepage__photo");
    portrait.src = `${photographe.portrait}`;

    // DANS HEADER --------------------------------------------------¤
    heade.appendChild(contenant);
    heade.appendChild(nomph);
    heade.appendChild(localisation);
    heade.appendChild(phrase);
    heade.appendChild(taglist);
    heade.appendChild(button);
    heade.appendChild(portrait);

    // DANS LES CONTENANT ------------------------------------------¤
    contenant.appendChild(nomph);
    contenant.appendChild(localisation);
    contenant.appendChild(phrase);
    contenant.appendChild(taglist);

    // DANS DOM ----------------------------------------------------¤
    hautdepage.appendChild(heade);

    // LIEN ID -> PHOTOGRAPERID
    const mimi = [];
    console.log(mimi);

    // BOUCLE LIENS (ID -> PHOTOGRAPERID) -------------------------¤
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

    //TOTAL LIKE -------------------------------------------------¤
    const like = document.querySelector(".like");
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
    like.appendChild(total);

    // PAGE DYNAMIQUE --------------------------------------------¤
    displayMedias(mimi);
    createlightbox();

    // MENU TRIE -------------------------------------------------¤
    const dropdowntitres = document.querySelector("#dropdownMenu");
    dropdowntitres.tabIndex = 7;
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
         createlightbox();
      } else if (e.target.value === "popularity") {
        mimi.sort(function (a, b) {
          return b.likes - a.likes;
        });

        gallery.innerHTML = "";
        displayMedias(mimi);
         createlightbox();
      } else if (e.target.value === "date") {
        console.log(mimi);
        mimi.sort(function (a, b) {
          var dateA = new Date(a.date);
          var dateB = new Date(b.date);
          return dateA - dateB;
        });

        gallery.innerHTML = "";
        displayMedias(mimi);
         createlightbox();
      }
    });
  }).catch((err) => {
  console.log(err);})