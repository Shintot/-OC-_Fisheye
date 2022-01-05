
const lightbox = document.querySelector ("#lightbox")
const lightboxopen = document.querySelector(".photographegallery__photop");
const close = document.querySelector("#close1")
const links = document.querySelectorAll(".photographegallery div");


// ajout click sur les liens
for(let link of links){
    link.addEventListener("click", function(e){
        alert("Image clicked")
        //desactivation liens
        e.preventDefault();
        //ajout image par click
        const image = lightbox.querySelector(".lightbox__contenant img");
        image.src = `${medias.image}`;
        //affiche lightbox
        lightbox.classList.add("show")
    })

     // ferme lightbox
     close.addEventListener("click", function(){
        lightbox.classList.remove("show")
    });

     // ferme lightbox clic exterieur
     lightbox.addEventListener("click",function(){
        lightbox.classList.remove("show")
    });
}