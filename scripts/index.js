// let mybutton = document.getElementById("top-button");

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         mybutton.style.display = "block";
//     } else {
//         mybutton.style.display = "none";
//     }
// }

// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }

// var modal = document.getElementById("img-modal");

// var img = document.getElementById("img1");
// var imgModal = document.getElementById("img01")
// var captionText = document.getElementById("caption1")
// img.onclick = function() {
//     console.log('IN HERE')
//     imgModal.style.display = "block";
//     imgModal.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// var span = document.getElementsByClassName("close")[0];

// span.onclick = function() {
//     modal.style.display = "none";
// }

// thanks to help from Akila :) 

document.addEventListener("DOMContentLoaded", function() {
    // Top button functionality
    let mybutton = document.getElementById("top-button");

    if (mybutton) {
        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        };
    }

    // Modal functionality for image gallery
    var modal = document.getElementById("img-modal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption1");
    var span = document.getElementsByClassName("close")[0];

    if (modal && modalImg && captionText) {
        // Add click event to all gallery images
        var galleryImages = document.querySelectorAll("#image-gallery img");
        galleryImages.forEach(function(img) {
            img.style.cursor = "pointer";
            img.onclick = function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            };
        });

        // Close modal when clicking X
        if (span) {
            span.onclick = function() {
                modal.style.display = "none";
            };
        }

        // Close modal when clicking outside the image
        modal.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    }
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}