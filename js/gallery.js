document.addEventListener("DOMContentLoaded", function () {
    var thumbs = document.querySelectorAll("#thumbnail-list img");
    var largeImage = document.querySelector("#gallery figure img");
    var largeImageCaption = document.querySelector("#gallery figure figcaption");

    thumbs.forEach(function (thumbnail, index) {
        thumbnail.addEventListener("click", function () {
            largeImage.src = thumbnail.src.replace("-small", "-large");
            largeImage.alt = thumbnail.alt;
            largeImageCaption.textContent = thumbnail.alt;
        });
    });
});