let count=0
let total=0

let element=document.getElementById("number")
let saveEl=document.getElementById("save-el")
let totalEl=document.getElementById("total-el")

function save(){
    let para = count + " , "
    saveEl.textContent+=para
    total = total + count
    count=0
    element.textContent=count
    let totaltext = "No. of Passengers:" + total
    totalEl.textContent = totaltext
}

function increment(){
    count += 1
    element.textContent=count
}

function decrement(){
    count += -1
    element.textContent=count
}