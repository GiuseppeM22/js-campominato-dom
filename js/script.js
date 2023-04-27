//prendere id bottone, contenitore
const contenitore = document.querySelector(".container")
const btn = document.getElementById("play")

// generare un evento click che crei una griglia da 1-100

btn.addEventListener("click", function(){
 for (let i = 1; i <= 100; i++) {
    const quadratoHtml = `<div class="square">${i}</div>`
    contenitore.innerHTML += quadratoHtml
 }

 //generare 16 numeri casuali da 1 a 100
 for (let i = 1; i <= 16; i++) {
   let randomNumber = Math.floor(Math.random()* 100 +1)
   console.log(randomNumber)
   if (randomNumber==quadratoHtml[i]){
      console.log("errore")
   }                
}



//la cella si colora di azzurro
// evento click sul quadrato nel quale andiamo a mettere in evidenza con
//toggle una classe clicked con background color azzurro
// necessario ciclare su quadrato.lenght per estrapolare ogni singolo elemento dell'array
// quato perche prima li avevamo selezionati tutti, e l'evento click funziona sul singolo elemento
 

const quadrato = document.querySelectorAll(".square")
for (let i = 0; i < quadrato.length; i++) {
    const quadratoEl = quadrato[i];

    quadratoEl.addEventListener("click", function(){
       this.classList.toggle("clicked")
       console.log("Numero: ", quadratoEl.innerText)
       


   })
   
}
 
}) 







