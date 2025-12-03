let mybutton = document.getElementById("top-button");

window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         mybutton.style.display = "block";
//     } else {
//         mybutton.style.display = "none";
//     }
// }

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var modal = document.getElementById("img-modal");

var img = document.getElementById("img1");
var imgModal = document.getElementById("img01")
var captionText = document.getElementById("caption1")
img.onclick = function() {
    console.log('IN HERE')
    imgModal.style.display = "block";
    imgModal.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}