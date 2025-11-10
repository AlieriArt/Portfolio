// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let close = document.getElementsByClassName("close")[0]; //getting the close button

let right = document.getElementById("button-right"); //getting the right button
let left = document.getElementById("button-left"); //getting the left button

let characterImages = []; //array of all character images
let index = 0;
let imageContainer = document.getElementById("character-grid");
let children = Array.from(imageContainer.children);


// looping though the children of the grid container to get all divs
function setUp(){
    let that = this;
    for(let i=0; i < children.length; i++){
        const CHILD = children[i];
        const SRC = CHILD.children[0].src;
        characterImages.push(SRC);
        CHILD.addEventListener("click", ()=>{
            that.viewGallery(SRC, i);
        });
    }
}

function viewGallery(src, order){
    index = order;
    modal.style.display = "block"; //by default display left and right button
    modal.querySelector("#gallery-portrait").src = src; //choose the image source based on what image was clicked on
    console.log(src)
    console.log(index)
    if(index == 0){
        left.style.display = "none"; //don't display the left button on the first image
    }
    else if(index > 0){
        left.style.display = "block"; //display left button on other images
    }
    if(index == children.length-1){
        right.style.display = "none"; //don't display the right button on last image
    }
    else if(index < children.length-1){
        right.style.display = "block"; //display the right button on other images
    }
}

//switching through gallery
right.onclick = function(){
    index++; //index grows if clicked on right button
    console.log(index)
    modal.querySelector("#gallery-portrait").src = characterImages[index]; //source changes to the next image
    //checking again for the index to display the right buttons
    if(index > 0){
        left.style.display = "block"
    }
    if(index == children.length-1){
        right.style.display ="none";
    }
}

left.onclick = function(){
    index--; //index falls if clicked on left button
    console.log(index)
    modal.querySelector("#gallery-portrait").src = characterImages[index]; //source changes to the previous image
     //checking again for the index to display the right buttons
    if(index < children.length-1){
        right.style.display = "block"
    }
    if(index == 0){
        left.style.display ="none";
    }
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    modal.style.display = "none";
}

function openMenu() {
    let menu = document.getElementById("mylinks");
    let icons = document.getElementById("sm-icons");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

    if (icons.style.display === "block") {
        icons.style.display = "none";
    } else {
        icons.style.display = "block";
    }
}

//setting off the setUp function once the window loads
window.onload = setUp;