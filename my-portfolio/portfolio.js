let closee = document.querySelector(".close");
let menu = document.querySelector(".menu");
let list = document.querySelector("nav ul");
//show more about my work
document.querySelector(".more").addEventListener("click",()=>{
    document.querySelector(".more").style.display="none";
    let work = document.querySelectorAll(".port");
    work[2].style.display="grid";
    work[3].style.display="grid";
    document.querySelector(".less").style.display="block";
})
//hidemore about my work
document.querySelector(".less").addEventListener("click",()=>{
    document.querySelector(".less").style.display="none";
    let work = document.querySelectorAll(".port");
    work[2].style.display="none";
    work[3].style.display="none";
    document.querySelector(".more").style.display="block";
})

//show the logo
window.addEventListener("scroll",()=>{
    if(scrollY > 504){
        document.querySelector(".logo").style.display="block";
        document.querySelector(".nav").style.display="flex";
        document.querySelector(".nav").style.justifyContent="space-between";
        document.querySelector(".nav").style.background="#293462";
    }
    else{
        document.querySelector(".logo").style.display="none";
        document.querySelector(".nav").style.display="block";
        document.querySelector(".nav").style.border="none";
        document.querySelector(".nav").style.background="transparent";
        document.querySelector(".menu").style.justifyContent="right";
    }
})

//this is for the close-open button

menu.addEventListener("click",()=>{
    list.style.display = 'flex';
    menu.style.display="none";
    closee.style.display="block";
        if(window.innerWidth < 715 ){
            document.querySelector(".nav").style.background="red";
        }
        else{
            document.querySelector(".nav").style.background="transparent";            
        }
})

closee.addEventListener("click",()=>{
    list.style.display = 'none';
    menu.style.display="block";
    closee.style.display="none";
    if(scrollY > 504){
        document.querySelector(".nav").style.background="#293462";

    }
    else{
        document.querySelector(".nav").style.background="transparent";
    }
})

/*this is used to show the nav bar after clicking on the 
close button and resize the window*/
window.addEventListener('resize', () => {
     if(window.innerWidth > 715 ){
        list.style.display = 'flex';
        document.querySelector(".nav").style.background="transparent"; 
     }
     else{
        //this is used to show the nav if the closee icon is block
        if(closee.style.display =="block"){
            list.style.display = 'flex';
            document.querySelector(".nav").style.background="red";
        }
        else{
            //this is used to show the nav if the closee icon is shown none
            list.style.display = 'none';
            if(scrollY > 504){
                document.querySelector(".nav").style.background="#293462";
            }
            else{
                document.querySelector(".nav").style.background="transparent";
            }
        }
     }
 });

//this is used to hide the list when we click on a category of it
var elements = document.querySelectorAll("nav ul li");

elements.forEach(element => {
    element.addEventListener("click",() => {
        if(window.innerWidth < 715){
            list.style.display = 'none';
            menu.style.display="block";
            closee.style.display="none";
        }
        
    })
});
//this is for the button of the logo
document.querySelector(".head .nav .logo").addEventListener("click",() =>{
    if(window.innerWidth < 715){
        list.style.display = 'none';
        menu.style.display="block";
        closee.style.display="none";
    }
})