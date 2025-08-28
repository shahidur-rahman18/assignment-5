
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
      
// call functional 


let val = 100;
const point = document.getElementById('coins');
const totalCall = document.querySelectorAll('.call-btn');
const numbers = document.querySelectorAll('.nmbr');

// for (let i = 0; i < totalCall.length; i++) {
//     totalCall[i].addEventListener('click', function () {
//         if (val > 0) {
//             val -= 20;
//             if (val >= 0) {
//                 point.innerText = val;
//                 if (val === 0) {
//                     alert('Not enough coins');
//                 } else {
//                     const number = numbers[i].innerText;
//                     alert('📌 Your Number is Calling: ' + number);
//                 }
//             }
//         } else {
//             alert('Not enough coins');
//         }
//     });
// }


const historyContainer = document.getElementById('history-container');

for (let i = 0; i < totalCall.length; i++) {
    totalCall[i].addEventListener('click', function () {
        if (val > 0) {
            val -= 20;
            if (val >= 0) {
                point.innerText = val;
                const number = numbers[i].innerText;
                const title = numbers[i].parentElement.querySelector('h4').innerText;
                const time = new Date().toLocaleTimeString('en-US', { hour12: false });
                // Add history entry
                const entry = `
                  

                    <div class="bg-[#d0d0d2]  rounded-xl p-3 flex flex-col justify-between gap-6 items-center  mt-3">
                    <div class="flex justify-between items-center gap-5 mt-2">
                    <div>
                      <h1 class="font-bold text-sm">${title}</h1>
                      <p class="text-gray-500 font-semibold text-sm">${number}</p>
                    </div>
                    <p class="font-semibold">${time}</p>
                  </div>
             
             
              
            </div>
                `;
                historyContainer.innerHTML += entry;
                if (val === 0) {
                    alert('Not enough coins');
                } else {
                    alert('📌 Your Number is Calling: ' + number);
                }
            }
        } else {
            alert('Not enough coins');
        }
    });
}



const clearBtn = document.getElementById('clear-btn');
const historyDelete= document.getElementById('history-container');

clearBtn.addEventListener('click', function () {
    historyContainer.innerHTML = '';
});











// let val=100

// const point= document.getElementById('coins')
// const totalCall = document.querySelectorAll('.call-btn')
// const numbers= document.querySelectorAll('.nmbr')
// console.log(numbers)
// const currentCoin=0




const callBtns = document.querySelectorAll('.call-btn');
const copyBtns = document.querySelectorAll('.copy-btn');


callBtns.forEach(btn => btn.classList.add('cursor-pointer'));
copyBtns.forEach(btn => btn.classList.add('cursor-pointer'));

copyBtns.forEach((btn, i) => {
    btn.addEventListener('click', function () {
        const number = numbers[i].innerText;
        navigator.clipboard.writeText(number)
            .then(() => {
                alert('Your Number is Copied: ' + number);
            })
            .catch(() => {
                alert('Failed to copy number.');
            });
    });
});
   





