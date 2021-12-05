
//dom
const gallery = document.querySelector ("#gallery");
const hautdepage = document.querySelector ("#hautdepage");

// lire le json 
fetch("../database/photographe.json")
  .then((response) => response.json())
  .then((data) => {

//le json  
  const media = data.media;
  const photographes = data.photographers;

//header dynamique 
for (let header of photographes) {
  //contenant header ----------------------------¤
  const heade = document.createElement("div")
  heade.classList.add("photographepage");

  //header ----------------------------¤
  const contenant = document.createElement("div")
  contenant.classList.add("photographepage__content");

  //nom du photographe ----------------------------¤
  const nomph = document.createElement("h1")
  nomph.classList.add("photographepage__title");
  nomph.innerText = header.name;

  //localisation du photographe ----------------------------¤
  const localisation = document.createElement("p")
  localisation.classList.add("photographepage__localisation");
  localisation.innerText = header.city;

  //phrase du photographe ----------------------------¤
  const phrase = document.createElement("p")
  phrase.classList.add("photographepage__tagline");
  phrase.innerText = header.tagline;

  //taglist du photographe ----------------------------¤
  const taglist = document.createElement("ul")
  taglist.classList.add("photographepage__taglist");

  const taglist1 = document.createElement("li")
  taglist1.classList.add("photographepage__taglist");

   //portrait du photographe ----------------------------¤
   const portrait = document.createElement("img")
   portrait.classList.add("photographepage__photo");
   portrait.src = `${header.portrait}`;

   
   // tout dans heade
   heade.appendChild(contenant)
   heade.appendChild(nomph)
   heade.appendChild(localisation)
   heade.appendChild(phrase)
   heade.appendChild(taglist)
   heade.appendChild(portrait)

   //tout dans contenant
   contenant.appendChild(nomph)
   contenant.appendChild(localisation)
   contenant.appendChild(phrase)

   //head dans dom
   //hautdepage.appendChild(heade)
}


// lien id -> photograperid
  
const id = new URLSearchParams(document.location.search).get("id");
console.log("ID : " + id);
const mimi= []

// boucle lien (id -> photograperid)
for (let photo of media ) {
  
  if( photo.photographerId===parseInt (id)) {
    mimi.push(photo)
    
  }
}

  
// page dynamique 
for (let medias of mimi) {

// contenant des photographe ----------------------------¤
const carte = document.createElement("div");
carte.classList.add("photographegallery__card");

//lien lightbox image -----------------------------------¤
const imagepourlightbox = document.createElement("a");
imagepourlightbox.href= `${medias.photo}`;

//image photographe -------------------------------------¤
const images = document.createElement("img");
images.src = `${medias.image}`;
images.classList.add("photographegallery__photop");

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
titre.innerText = medias.likes;

//btn like -----------------------------------------¤
const btn = document.createElement("button");
btn.classList.add("photographegallery__section-button");

//coeur -----------------------------------------¤
const coeur = document.createElement("i");


//tout dans carte  
  carte.appendChild(imagepourlightbox)
  carte.appendChild(footer)
  carte.appendChild(like)
  carte.appendChild(btn)
  carte.appendChild(coeur)
  carte.appendChild(nombre)

//coeur dans btn 
  btn.appendChild(coeur)

//btn et nombre dans like
  like.appendChild(btn)
  btn.appendChild(coeur)
  like.appendChild(nombre)

// like et titre dans footer
  footer.appendChild(like)
  footer.appendChild(titre)

//image dans <a> (lien lightbox) 
  imagepourlightbox.appendChild(images)

//photo dans gallery (DOM)
  gallery.appendChild(carte)


}}).catch((err) => {
  console.log(err);})

  