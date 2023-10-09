
    const imageElement = document.getElementById("myImage");


    const imageSources = [
        "img1.jpg",
        "img2.jpg",

    ];

    let currentImageIndex = 0; 

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % imageSources.length; 
        const newImageSrc = imageSources[currentImageIndex];
        imageElement.src = newImageSrc; 
    }

    setInterval(changeImage, 3000);
