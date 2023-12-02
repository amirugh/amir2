// let titr = document.querySelectorAll(".titr")
// let hiddenD = document.querySelectorAll(".hidden-D")
let site = document.getElementById("site")
let youtube = document.getElementById("youtube")
let sites = document.getElementById("sites")
let youtubes = document.getElementById("youtubes")


let sabz= document.getElementById("sabz")
let sabz1= document.getElementById("sabz1")
let codeyad= document.getElementById("codeyad")
let codeyad1= document.getElementById("codeyad1")
let neon= document.getElementById("neon")
let neon1= document.getElementById("neon1")
let seven= document.getElementById("seven")
let seven1= document.getElementById("seven1")
let topp= document.getElementById("top")
let top1= document.getElementById("top1")
let sarvin= document.getElementById("sarvin")
let sarvin1= document.getElementById("sarvin1")
let Kalagar= document.getElementById("Kalagar")
let Kalagar1= document.getElementById("Kalagar1")
let gitMag= document.getElementById("gitMag")
let gitMag1= document.getElementById("gitMag1")


let isOpen = true ;
let isOpen1 = true ;
let isOpen2 = true ;
let isOpen3 = true ;
let isOpen4 = true ;
let isOpen5 = true ;
let isOpen6 = true ;
let isOpen7 = true ;
let isOpen8 = true ;

let isOpenTitr = true
let isOpenTitr1 = true


site.addEventListener("click", function(){
    if(isOpenTitr===true){
        sites.style.display = "block"
        isOpenTitr = false
}else{
    sites.style.display = "none"
    isOpenTitr = true
}})

youtube.addEventListener("click", function(){
    if(isOpenTitr1===true){
        youtubes.style.display = "block"
        isOpenTitr1 = false
}else{
    youtubes.style.display = "none"
    isOpenTitr1 = true
}})


sabz1.addEventListener("click",function(){

    if(isOpen===true){
            sabz.style.color = "black"
            sabz.style.display = "block"
            isOpen = false
    }else{
        sabz.style.display = "none"
        sabz.style.color = "black"

        isOpen = true
    }
    sabz.style.transition = "1s"

})
codeyad1.addEventListener("click",function(){

    if(isOpen1){
            codeyad.style.display = "block"
            isOpen1 = false
    }else{
        codeyad.style.display = "none"
        isOpen1=true
    }
    codeyad.style.transition = "1s"

})
neon1.addEventListener("click",function(){

    if(isOpen2){
            neon.style.display = "block"
            isOpen2 = false
    }else{
        neon.style.display = "none"
        isOpen2= true
    }
    neon.style.transition = "1s"

})
seven1.addEventListener("click",function(){

    if(isOpen3){
            seven.style.display = "block"
            isOpen3 = false
    }else{
        seven.style.display = "none"
        isOpen3=true
    }
    seven.style.transition = "1s"

})


sarvin1.addEventListener("click",function(){

    if(isOpen5){
                sarvin.style.display = "block"
                isOpen5 = false
        }else{
            sarvin.style.display = "none"
            isOpen5= true
        }
    sarvin.style.transition = "1s"

})
Kalagar1.addEventListener("click",function(){

    if(isOpen6){
                Kalagar.style.display = "block"
                isOpen6 = false
        }else{
            Kalagar.style.display = "none"
            isOpen6= true
        }
    Kalagar.style.transition = "2s"

})



