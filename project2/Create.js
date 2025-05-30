var btn=document.querySelector("button");
var body=document.querySelector("body");
btn.addEventListener('click',function(){
    var x=Math.random()*99
    var y=Math.random()*99
    var rot=Math.random()*360

    var img=document.createElement('img')

    img.setAttribute("src","bheemchutki.png")
    
    img.style.height="200px"
    img.style.position="absolute"
    img.style.left=x+'%'
    img.style.top=y+'%'
    img.style.rotate=rot+"deg"

    body.appendChild(img)
})