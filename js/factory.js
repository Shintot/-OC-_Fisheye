function factory(medias) {
  const { image, video } = medias;

  if (image !== undefined) {
    return createImages(medias);
  }

  return createVideo(medias);
}

function createImages(medias) {
  const images = document.createElement("img");
  images.src = `${medias.image}`;
  images.tabIndex = 5;
  images.classList.add("photographegallery__photop");
  return images;
}

function createVideo(medias) {
  const videos = document.createElement("video");
  videos.tabIndex = 5;
  videos.type = "video/mp4";
  videos.autoplay = "autoplay";
  videos.controls = "controls";
  const source = document.createElement("source");
  source.setAttribute("src", `${medias.video}`);
  videos.appendChild(source);
  videos.classList.add("photographegallery__photop");
  return videos;
}