function doc(params) {
    return document.querySelector(params)
    
}

const inp = doc("#inp");
const but = doc("#but");
const p = doc("#p");
 
inp.addEventListener("input", inputFoo)

function inputFoo(e) {
    
     
but.addEventListener("click", () => {
  
  
    p.innerText = e.target.value;
    
})

   
}