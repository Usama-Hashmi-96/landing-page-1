document.querySelector(".hamburger-icon").addEventListener("click",()=>{
    
           const nav =  document.querySelector(".hidden-nav")
           if(nav.style.opacity === "0")
           {
            nav.style.opacity = "1"
           }
           else{
            nav.style.opacity = "0"
           }

});
