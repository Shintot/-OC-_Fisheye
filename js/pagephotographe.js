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
    console.log("photog : ", photographe);

    //header dynamique

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
    
    // tags du photographe
    const taglist1 = document.createElement("li");
    taglist1.classList.add("photographepage__tags");
    taglist1.innerText = photographe.tags;

    //btn contact
    const button = document.createElement("button");
    button.classList.add("photographepage__button");
    button.Text = contact;

    //portrait du photographe ----------------------------¤
    const portrait = document.createElement("img");
    portrait.classList.add("photographepage__photo");
    portrait.src = `${photographe.portrait}`;

    // tout dans heade
    heade.appendChild(contenant);
    heade.appendChild(nomph);
    heade.appendChild(localisation);
    heade.appendChild(phrase);
    heade.appendChild(taglist);
    heade.appendChild(taglist1);
    heade.appendChild(button);
    heade.appendChild(portrait);
    

    //tout dans contenant
    contenant.appendChild(nomph);
    contenant.appendChild(localisation);
    contenant.appendChild(phrase);
    contenant.appendChild(taglist);
    contenant.appendChild(taglist1);

    taglist.appendChild(taglist1)

    //head dans dom
    hautdepage.appendChild(heade);

    // lien id -> photograperid

    //const id = new URLSearchParams(document.location.search).get("id");
    //console.log("ID : " + id);
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


      const videos = document.createElement("video")
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
      console.log(like);

      //btn like -----------------------------------------¤
      const btn = document.createElement("button");
      btn.classList.add("photographegallery__section-button");

      //coeur -----------------------------------------¤
      const coeur = document.createElement("i");

      //image dans <a> (lien lightbox)
      imagepourlightbox.appendChild(images);
      imagepourlightbox.appendChild(footer);
      imagepourlightbox.appendChild(titre);
      imagepourlightbox.appendChild(like);
      imagepourlightbox.appendChild(btn);
      imagepourlightbox.appendChild(coeur);
      imagepourlightbox.appendChild(nombre);
      imagepourlightbox.appendChild(carte);
      
      

      //tout dans carte
      carte.appendChild(images);
      carte.appendChild(footer);
      carte.appendChild(titre);
      carte.appendChild(like);
      carte.appendChild(btn);
      carte.appendChild(coeur);
      carte.appendChild(nombre);
      
      //btn et nombre dans like
      like.appendChild(btn);
      like.appendChild(nombre);
      btn.appendChild(coeur);

      // like et titre dans footer
      footer.appendChild(titre);
      footer.appendChild(like);
      footer.appendChild(coeur);

      //photo dans gallery (DOM)
      gallery.appendChild(imagepourlightbox);
    }
  }).catch((err) => {
  console.log(err);})

  