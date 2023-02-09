// JavaScript source code

function upDate(previewPic) {
    var img = previewPic.src;
    var altText = previewPic.alt;
    document.getElementById("image").innerHTML = altText;

    //When changing style via JS, the argument must be contained in
    //quotations and variables concatenated outside quotations as shown below!
    document.getElementById("image").style.backgroundImage = "url(" + img + ")";

}

function unDo() {
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
    document.getElementById("image").style.backgroundImage = "url('')";
;

}