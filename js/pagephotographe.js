
//dom
const gallery = document.querySelector ("#gallery");

fetch("../database/photographe.json")
  .then((response) => response.json())
  .then((data) => {

    
const photographes = data.media;

for (let photo of photographes) {

// contenant des photographe ----------------------------¤
const carte = document.createElement("div");
carte.classList.add("photographegallery__card");


//lien lightbox image -----------------------------------¤
const imagepourlightbox = document.createElement("a");
imagepourlightbox.href= `${media.photo}`;

//image photographe -------------------------------------¤
const images = document.createElement("img");
images.src = `${media.image}`;
images.classList.add("photographegallery__photop");

//footer ---------------- ------------------------------¤
const footer = document.createElement("footer");
footer.classList.add("photographegallery__footer");

//titre -----------------------------------------¤
const titre = document.createElement("p");
titre.classList.add("photographegallery__figcaption");
titre.innerText = media.photoName;

// contenant bouton like ----------------------------¤
const like = document.createElement("div");
like.classList.add("photographegallery__like");

//nombre like -----------------------------------------¤
const nombre = document.createElement("p");
nombre.classList.add("photographegallery__chiffre");
titre.innerText = media.likes;

//btn like -----------------------------------------¤
const btn = document.createElement("button");
btn.classList.add("photographegallery__section-button");

//coeur -----------------------------------------¤
const coeur = document.createElement("i");
coeur.classList.add("far fa-heart");

//coeur dans btn 
btn.appendChild(coeur)

//btn et nombre dans like
like.appendChild(btn)
like.appendChild(nombre)

// like et titre dans footer
footer.appendChild(like)
footer.appendChild(titre)

//image dans <a> (lien lightbox) 
imagepourlightbox.appendChild(images)

//tout dans carte  
carte.appendChild(imagepourlightbox)
carte.appendChild(footer)

//carte dans photo (for)
photo.appendChild(carte)

//photo dans gallery (DOM)
gallery.appendChild(photo)

}})