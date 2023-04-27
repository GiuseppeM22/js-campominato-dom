
//prendere id bottone, contenitore
const contenitore = document.querySelector(".container")
const btn = document.getElementById("play")

// generare un evento click che crei una griglia da 1-100

btn.addEventListener("click", function(){
 for (let i = 1; i <= 100; i++) {
    const quadratoHtml = `<div class="square">${i}</div>`
    contenitore.innerHTML += quadratoHtml
    
   
 }
 //generare 16 numeri casuali da 1 a 100 che assegniamo ad una variabile pushandoli in essa per creare un array con quei numeri
 //successivamente andremo a ciclare su questo arrei per estrapolare ogni singolo elemento

 let randomNumber = []
    console.log(randomNumber)

      for (let i = 1; i <= 16; i++) {
         let numeri = Math.floor(Math.random()* 100 +1)
         randomNumber.push(numeri)
                  
      }
  
   
   
   const quadrato = document.querySelectorAll(".square")
   // necessario ciclare su quadrato.lenght per estrapolare ogni singolo elemento dell'array
   // in generale bisogna ciclare per estrapolare elementi singoli da un array, l'evento click funziona sul singolo elemento
   for (let i = 0; i < quadrato.length; i++) {
       const quadratoEl = quadrato[i];
   
       quadratoEl.addEventListener("click", function(){
       // evento click sul quadrato nel quale andiamo a mettere in evidenza con
       //toggle una classe clicked con background color azzurro
          this.classList.toggle("clicked")
          console.log("Numero: ", quadratoEl.innerText)
          let numeroVinecente = quadratoEl.innerText
          for (let i = 0; i < randomNumber.length; i++) {
            let numberEl = randomNumber[i];
            
            if(numberEl==numeroVinecente){
               this.classList.add("bomb")
               alert("Boom!! Hai perso!")
            }
         }
         
         
      })
      
   }
    
   }) 


    
 








 







