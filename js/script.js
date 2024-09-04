
window.onscroll = function(){
    var currentScrollPos = window.pageYOffset || window.scrollY;
    if(currentScrollPos == 0){
        document.getElementById("navbar").style.backgroundColor = "inherit";
    }
    else{
        document.getElementById("navbar").style.backgroundColor = "rgb(255,255,255)";
    }
    document.getElementById("Ypos").innerHTML = window.scrollY;
}