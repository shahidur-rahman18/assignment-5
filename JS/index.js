
// love section 
let counter =0
const text=document.getElementById('love-counter')
const clicksCount =document.querySelectorAll('.love-btn')
for (const click of clicksCount){
click.addEventListener('click',function(){
    counter++
    text.innerText=counter
   })

}
   
// // copy number copy-btn call-btn
// let copyCounter =0
// const copyCountValue=document.getElementById('copy-count-btn')

// const clicksCopyCount =document.querySelectorAll('.copy-btn')
// for (const clicks of clicksCopyCount){
// clicks.addEventListener('click',function(){

//        const numbers =document. querySelectorAll('.nmbr')
//        const temp=0
// for(const number of numbers){
//     temp=number
     
// }
//  alert('📌 Your Number is Copied',temp) 

 
//     copyCounter++
//     copyCountValue.innerText=copyCounter

    
//    })

// }

let val=100
const point= document.getElementById('coins')
const totalCall = document.querySelectorAll('.call-btn')
const currentCoin=0
for(const call of totalCall){
    call.addEventListener('click',function(){
       
        if(val>0){
            val-=20
            if(val>=0){
                point.innerText=val
                if(val===0){
                    alert('Not enough coins')
                }
                else{
                    alert('📌 Your Number is Copied')
                }
            }
        }
         
    }

)

}
   





