let buttun =document.querySelector(".avatar button");
buttun.addEventListener("click", function(){
    if(buttun.getAttribute("aria-expanded")=== "true"){
        buttun.setAttribute("aria-expanded", "false");
    } else {
        buttun.setAttribute("aria-expanded", "true");
    }
})