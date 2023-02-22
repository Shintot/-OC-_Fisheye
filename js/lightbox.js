

function createlightbox() {
  //LIGHTBOX -------------------------------------------------------------¤
  const light = document.querySelectorAll(
    ".photographegallery .photographegallery__contenantlightbox"
  );

  

  const lightbox = document.querySelector("#lightbox");
  const lightboximg = lightbox.querySelector(".lightbox__img");
  const videobox = document.querySelector("#videobox");
  const imgbox = document.querySelector("#imgbox");
  const close = lightbox.querySelector(".lightbox__close");
  close.tabIndex = 3;

  for (let i = 0; i < light.length; i++) {
    let newindex = i;
        
    light[i].onclick = () => {
      function preview() {
        let selectedImgUrl = light[newindex].querySelector("img");

        let url = "";
        if (selectedImgUrl) {
          imgbox.classList.remove("displaynone");
          videobox.classList.add("displaynone");
          url = selectedImgUrl.src;
          lightboximg.src = url;
        } else {
          imgbox.classList.add("displaynone");
          videobox.classList.remove("displaynone");
          selectedImgUrl = light[newindex].querySelector("video");
          url = selectedImgUrl.firstChild.src;
          const sourcevideo = document.createElement("source");
          sourcevideo.src = url;
          sourcevideo.type = "video/mp4";
          videobox.autoplay = "autoplay";
          videobox.controls = "controls";
          videobox.appendChild(sourcevideo);
          console.log(selectedImgUrl.firstChild);
        }
      }

      //BOUTON BACK & NEXT
      const btnback = document.querySelector(".lightbox__back");
      const btnnext = document.querySelector(".lightbox__next");
     
     
      if (newindex == 0) {
        {
          btnback.style.display = "none";
        }
      }

      if (newindex >= light.length - 1) {
        btnnext.style.display = "none";
      }

      btnback.onclick = () => {
        newindex--;
        if (newindex == 0) {
          preview();
          btnback.style.display = "none";
        } else {
          preview();
          btnnext.style.display = "block";
        }
      };

      btnnext.onclick = () => {
        newindex++;
        if (newindex >= light.length - 1) {
          preview();
          btnnext.style.display = "none";
        } else {
          preview();
          btnback.style.display = "block";
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

    light[i].addEventListener("keydown", function (event) {
       

      if (event.key === "Enter") {
        function preview() {

          
          let selectedImgUrl = light[newindex].querySelector("img");

          let url = "";
          if (selectedImgUrl) {
            imgbox.classList.remove("displaynone");
            videobox.classList.add("displaynone");
            url = selectedImgUrl.src;
            lightboximg.src = url;
          } else {
            imgbox.classList.add("displaynone");
            videobox.classList.remove("displaynone");
            selectedImgUrl = light[newindex].querySelector("video");
            url = selectedImgUrl.firstChild.src;
            const sourcevideo = document.createElement("source");
            sourcevideo.src = url;
            sourcevideo.type = "video/mp4";
            videobox.autoplay = "autoplay";
            videobox.controls = "controls";
            videobox.appendChild(sourcevideo);
            console.log(selectedImgUrl.firstChild);
          }
        }

        //BOUTON BACK & NEXT
       const btnback = document.querySelector(".lightbox__back");
       const btnnext = document.querySelector(".lightbox__next");
        btnnext.tabIndex = 8;
        btnback.tabIndex = 8;
        if (newindex == 0) {
          {
            btnback.style.display = "none";
          }
        }

        if (newindex >= light.length - 1) {
          btnnext.style.display = "none";
        }

        btnback.addEventListener("keyup", function(event) {
          if ( event.key === 'Enter') {
            newindex--;
              if (newindex == 0) {
                  preview();
                  btnback.style.display = "none";
              } else {
              preview();
              btnnext.style.display = "block";
              }
          }
        });

       btnnext.addEventListener("keyup", function(event) {
          if ( event.key === 'Enter') {
              newindex++;
              if (newindex >= light.length - 1) {
            preview();
            btnnext.style.display = "none";
          } else {
            preview();
            btnback.style.display = "block";
          }
          }
        });
        
        preview();
        
        lightbox.classList.add("show");
        

        
      }

      const close = lightbox.querySelector(".lightbox__close");
      close.focus();
      close.addEventListener("keyup", function (event) {
        if (event.key === "Escape") {
          lightbox.classList.remove("show");
        }
        
      });
    });

    
  }

  
}




