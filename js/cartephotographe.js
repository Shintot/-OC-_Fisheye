//dom
const photographelist = document.querySelector("#hierarchie");
let photographes = [];
// lire le json
fetch("../database/photographe.json")
  .then((response) => response.json())
  .then((data) => {
    //le json
    photographes = data.photographers;
    displayPhotographers(photographes);
    
  })
  .catch((err) => {
    console.log(err);
  });

const lienh = document.querySelectorAll(".choix__lien");

for (let lien of lienh) {
  lien.addEventListener("click", function (e) {
    const url = lien.href;
    const tableau = url.split("#");
    const hashtag = tableau[1];
    const photographersByTag = [];
    for (let p of photographes) {
      if (p.tags.includes(hashtag)) {
        photographersByTag.push(p);
      }
    }
    console.log(hashtag);
    console.log(photographersByTag);
    photographelist.innerHTML = "";
    if(hashtag==="tout"){
        displayPhotographers(photographes);
    }
    displayPhotographers(photographersByTag);

  });
}


function displayPhotographers(photographes){
    for (let photographe of photographes) {
      // contenant des photographe ----------------------------¤
      const carte = document.createElement("div");
      carte.classList.add("carte");

      //lien lightbox image -----------------------------------¤
      const imagelightbox = document.createElement("a");
      imagelightbox.href = `/page/mimikeel.html?id=${photographe.id}`;

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
      slogan.classList.add("photographe__taff");
      slogan.innerText = photographe.tagline;

      //prix ----------------------------------------¤
      const prix = document.createElement("p");
      prix.classList.add("photographe__prix");
      prix.innerText = `${photographe.price}€/jour`;

      //tags ----------------------------------------¤
      const tags = document.createElement("div");
      tags.classList.add("photographe__filtre");

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
    }
}