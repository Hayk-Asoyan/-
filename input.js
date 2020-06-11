function doc(params) {
    return document.querySelector(params)
    
}

const inp = doc("#inp");
const but = doc("#but");
const p = doc("#p");
 

    
     
but.addEventListener("click", () => {
  
   
p.innerHTML += `<span> ${inp.value}<span/><br/>`;

 
    
})

   
