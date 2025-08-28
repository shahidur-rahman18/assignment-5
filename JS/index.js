

let counter =0
const text=document.getElementById('love-counter')
const clicksCount =document.querySelectorAll('.love-btn')
for (const click of clicksCount)[
   click.addEventListener('click',function(){
    counter++
    text.innerText=counter
   })
]