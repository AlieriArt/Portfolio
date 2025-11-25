// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let close = document.getElementsByClassName("close")[0];

let right = document.getElementById("button-right");
let left = document.getElementById("button-left");

let traditionalImages = [];
let index = 0;
let imageContainer = document.getElementById("traditional-grid");
let children = Array.from(imageContainer.children);

// looping though the children of the grid container to get all images
function setUp(){
    let that = this;
    for(let i=0; i < children.length; i++){
        const CHILD = children[i];
        const SRC = CHILD.src;
        traditionalImages.push(SRC);
        CHILD.addEventListener("click", () => {
            that.viewGallery(SRC, traditionalImages.indexOf(SRC));
        });
    }
}

function viewGallery(src, order) {
    index = order;
    modal.style.display = "block";
    modal.querySelector("#gallery-portrait").src = src;
    if (index == 0) {
        left.style.display = "none";
    }
    else if (index > 0) {
        left.style.display = "block";
    }
    if (index == traditionalImages.length-1) {
        right.style.display = "none";
    }
    else if (index < traditionalImages.length-1) {
        right.style.display = "block";
    }
}

//switching through gallery
right.onclick = function () {
    index++;
    console.log(index)
    modal.querySelector("#gallery-portrait").src = traditionalImages[index];
    if (index > 0) {
        left.style.display = "block"
    }
    if (index == traditionalImages.length - 1) {
        right.style.display = "none";
    }
}

left.onclick = function () {
    index--;
    console.log(index)
    modal.querySelector("#gallery-portrait").src = traditionalImages[index];
    if (index < traditionalImages.length - 1) {
        right.style.display = "block"
    }
    if (index == 0) {
        left.style.display = "none";
    }
}


// When the user clicks on <span> (x), close the modal
close.onclick = function () {
    modal.style.display = "none";
}

function openMenu() {
    let menu = document.getElementById("mylinks");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

//setting off the setUp function once the window loads
window.onload = setUp;