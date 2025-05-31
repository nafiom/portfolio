document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navList = document.querySelector(".navlist");

  menuIcon.addEventListener("click", () => {
    navList.classList.toggle("open");
  });

  document.querySelectorAll(".navlist a").forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");
    });
  });
});
function openVideoModal() {
  const modal = document.getElementById("videoModal");
  modal.style.display = "flex";

  // Lecture automatique
  const video = modal.querySelector("video");
  video.play();
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  modal.style.display = "none";

  const video = modal.querySelector("video");
  video.pause();
  video.currentTime = 0;
}




