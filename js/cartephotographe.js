// DOM
const photographelist = document.querySelector("#hierarchie");
let photographes = [];

// LIRE LE JSON
fetch("../database/photographe.json")
  .then((response) => response.json())
  .then((data) => {
    //LE JSON
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
    photographelist.innerHTML = "";
    if(hashtag==="tout"){
        displayPhotographers(photographes);
    }
    displayPhotographers(photographersByTag);
  });
}


function displayPhotographers(photographes){
    for (let photographe of photographes) {
      // CONTENANT DU PHOTOGRAPHE ----------------------------¤
      const carte = document.createElement("div");
      carte.classList.add("carte");

      // LIEN pour page -----------------------------------¤
      const imagelightbox = document.createElement("a");
      imagelightbox.href = `/page/mimikeel.html?id=${photographe.id}`;
      imagelightbox.tabIndex = 2;

      // CADRE CARTE ------------------------------------------¤
      const cadrecarte = document.createElement("div");
      cadrecarte.classList.add("photographe");

      //IMAGE PHOTOGRAPHE ------------------------------¤
      const image = document.createElement("img");
      image.src = `${photographe.portrait}`;
      image.classList.add("photographe__img");

      // NOM ET PRENOM DU PHOTOGRAPHE ---------------------------------¤
      const nom = document.createElement("h2");
      nom.classList.add("photographe__nom");
      nom.innerText = photographe.name;

      // LIEUX DU PHOTOGRAPHE -----------------------------------------¤
      const lieux = document.createElement("p");
      lieux.classList.add("photographe__localisation");
      lieux.innerText = photographe.city;

      // SLOGAN DU PHOTOGRAPHE ---------------------------------------¤
      const slogan = document.createElement("p");
      slogan.classList.add("photographe__taff");
      slogan.innerText = photographe.tagline;

      // PRIX DU PHOTOGRAPHE ----------------------------------------¤
      const prix = document.createElement("p");
      prix.classList.add("photographe__prix");
      prix.innerText = `${photographe.price}€/jour`;

      //TAGS DU PHOTOGRAPHE ----------------------------------------¤
      const tags = document.createElement("div");
      tags.classList.add("photographe__filtre");

    //HIERARCHIE 
      //CARTE PHOTOGRAPHE AU DOM 
      photographelist.appendChild(carte);

      // AFFICHAGE CARTE 
      carte.appendChild(imagelightbox);
      carte.appendChild(cadrecarte);
      carte.appendChild(image);
      carte.appendChild(nom);
      carte.appendChild(lieux);
      carte.appendChild(slogan);
      carte.appendChild(prix);
      carte.appendChild(tags);
      
      // 
      imagelightbox.appendChild(cadrecarte);
              
      // DIV DANS CARTE PHOTOGRAPHE
        cadrecarte.appendChild(image);
        cadrecarte.appendChild(nom);
        cadrecarte.appendChild(lieux);
        cadrecarte.appendChild(slogan);
        cadrecarte.appendChild(prix);
        cadrecarte.appendChild(tags);
    }
}