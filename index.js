const imageSlider = document.querySelector(".image-slider");
const images = imageSlider.querySelectorAll("img");
let currentIndex = 0;

function changeImage() {
    images[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = "block";
}

setInterval(changeImage, 2000); // Change image every 2 seconds