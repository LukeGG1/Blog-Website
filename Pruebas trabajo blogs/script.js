var navbar = document.getElementById("navbar")
var menu = document.getElementById("menu")

window.onscroll = function(){
    if(window.scrollY >= menu.offsetTop)
        navbar.classList.add("sticky");
    else{
        navbar.classList.remove("sticky");
    }
}