// document.getElementById("count-el").innerHTML=5
let saveEl= document.getElementById("save-el")
let countEl =document.getElementById("count-el")
let count =0;
console.log(saveEl)
function increment(){
       count = count+1
       countEl.textContent= count
}

function save(){
    let countStr= count + " - "
    saveEl.textContent +=countStr
    countEl.textContent = 0
    count=0
    // console.log(count)
}

let errorEl = document.getElementById("error")

function handleSubmt(){
    let errRed ='Warning try again'
 errorEl.textContent =errRed
 console.log(errRed)
}