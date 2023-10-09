const imageElement = document.getElementById("myImage");
const imageContainer = document.querySelector(".image-container");

const imageSources = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
];

let currentImageIndex = 0; 

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % imageSources.length; 
    const newImageSrc = imageSources[currentImageIndex];


    imageElement.classList.remove("image-transition");
    setTimeout(function () {
        imageElement.src = newImageSrc; 
        imageElement.classList.add("image-transition");
    }, 50);
}

setInterval(changeImage, 3000);
