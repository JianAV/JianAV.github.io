function toggle_dark_mode() {
    document.body.classList.toggle("dark_mode");
}

//SLIDESHOW SHENANANANANANANIGANS
let slideIndex = 1;
showSlides(slideIndex);

// next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    //updates slideIndex when index goes beyond scope of array (too high/low index)
    if (n > slides.length) { slideIndex = 1 }
    else if (n < 1) { slideIndex = slides.length }

    //updates every Slide and Dot to default states
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //displays active Slide and Dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}