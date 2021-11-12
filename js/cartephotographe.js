
//dom
const photographelist = document.querySelector ("#hierarchie");

// lire le json 
fetch("../database/photographe.json")
  .then((response) => response.json())
  .then((data) => {

    
const photographes = data.photographers;

for (let photographe of photographes) {

// contenant des photographe ----------------------------¤
    const carte = document.createElement("div");
    carte.classList.add("carte");

//lien lightbox image -----------------------------------¤
    const imagelightbox = document.createElement("a");
    imagelightbox.href = `${photographe.pages}`;


//cadre carte ------------------------------------------¤
    const cadrecarte = document.createElement("div");
    cadrecarte.classList.add("photographe");

//image photographe ------------------------------¤
    const image = document.createElement("img");
    image.src = `${photographe.portrait}`;
    image.classList.add("photographe__img");

//nom et prenom ---------------------------------¤
    const nom = document.createElement("h2");
    nom.classList.add("photographe__nom");
    nom.innerText = photographe.name;

//lieux -----------------------------------------¤
    const lieux = document.createElement("p");
    lieux.classList.add("photographe__localisation");
    lieux.innerText = photographe.city;

//slogan ---------------------------------------¤
    const slogan = document.createElement("p");
    slogan.classList.add("photographe__taff")
    slogan.innerText = photographe.tagline;

//prix ----------------------------------------¤
    const prix = document.createElement("p");
    prix.classList.add("photographe__prix");
    prix.innerText = `${photographe.price}€/jour`;

//tags ----------------------------------------¤
    const tags =document.createElement("div")
    tags.classList.add("photographe__filtre")

    for (let tag of photographe.tags) {
    const tagu = document.createElement("a");
    tagu.innerText = `#${tag}`;
    tagu.href = "#";
    // faire la hiérarchie
    tags.appendChild(tagu)
    }

//ajout carte photographe au dom 
photographelist.appendChild(carte);

// hiérarchie pour affichage
    carte.appendChild(imagelightbox);
    carte.appendChild(cadrecarte);
    carte.appendChild(image);
    carte.appendChild(nom);
    carte.appendChild(lieux);
    carte.appendChild(slogan);
    carte.appendChild(prix);
    carte.appendChild(tags);

// hiérarchie des elements hmtl dynamique 
    // a pour lien contient div
    imagelightbox.appendChild(cadrecarte);
    // div contenant carte photographe ..
    cadrecarte.appendChild(image);
    cadrecarte.appendChild(nom);
    cadrecarte.appendChild(lieux);
    cadrecarte.appendChild(slogan);
    cadrecarte.appendChild(prix);
    cadrecarte.appendChild(tags);
    
}}) .catch((err) => {
    console.log(err);})











