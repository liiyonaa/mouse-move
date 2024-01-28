let div=document.querySelector("div")
div.addEventListener("mousemove",function(e){
    e.target.style.backgroundColor=`rgb(${e.x-e.target.offsetLeft}, ${e.y-e.target.offsetTop}, 183)`
    e.target.style.borderRadius=e.offsetY+"px";
})
div.addEventListener("mouseleave",function(e){
    e.target.style.backgroundColor="lightblue"
    e.target.style.borderRadius="0"
    
})