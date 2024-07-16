let ham = document.querySelector(".ham");
let cross = document.querySelector(".cross");

cross.style.display = 'none';

document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if(document.querySelector(".sidebar").classList.contains("sidebarGo")){
        ham.style.display = "inline";
        cross.style.display = "none";
    }
    else{
        ham.style.display = "none";
        setTimeout(function(){
        cross.style.display = "inline";
        },100);
       
    }
})
