
//es una forma de realizar la misma función pero mas larga
/*function toggleMode(){
   const html = document.documentElement
   //utilizamos document como la representación de nuestro documento en formato de objeto
   //y luego uso documentElement para tener acceso a mi html
   if(html.classList.contains('light')){
    html.classList.remove('light')
   }else {
    html.classList.add('light')
   }
}*/

function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")

    //pegar a tag img 
    const img = document.querySelector("#profile img")

    //substituir image
    if(html.classList.contains("light")){
     //si tuviera light mode, adiccionar a image light
        img.setAttribute("src","./assets/assets/avatar-light.png")
    } else{ 
    // si no tuviera light mode mantener la imagen normal
            img.setAttribute("src", "./assets/assets/Avatar.png")
    }
}
