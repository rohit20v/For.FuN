import MicroModal from 'micromodal';

let sum = 0
let pc_num = Math.floor(Math.random() * 11) + 1
let number = 0

function draw() {
    let ace = Math.floor(Math.random() * 8) + 1
    if (ace === 4){

    }
    number = Math.floor(Math.random() * 11) + 1
    sum += number
    document.getElementById("current_card").textContent = "Card: " + number
    document.getElementById("total_card").textContent = "Sum: " + sum
    if (sum <= 20) {
        document.getElementById("alert").setAttribute("class", "alert alert-warning");
        document.getElementById("alert").innerHTML = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        document.getElementById("alert").setAttribute("class", "alert alert-success");
        document.getElementById("alert").innerHTML = "Wohoo! You've got Blackjack! 🥳"
        document.getElementById("draw").disabled = true
    } else {
        document.getElementById("alert").setAttribute("class", "alert alert-danger");
        document.getElementById("alert").innerHTML = "You've lost, Computer got " + pc_num
        document.getElementById("draw").disabled = true
        document.getElementById("stop").disabled = true
    }
    console.log(number)
}


function stop() {
    document.getElementById("draw").disabled = true
    if (sum <= 21 && sum > pc_num) {
        document.getElementById("alert").setAttribute("class", "alert alert-success");
        document.getElementById("alert").innerHTML = "Wohoo! You've got Blackjack! 🥳, Computer got " + pc_num
    }else if (sum <= 21 && sum === pc_num){
        document.getElementById("alert").setAttribute("class", "alert alert-warning");
        document.getElementById("alert").innerHTML = "Its a draw\n" + "Computer got " + pc_num
    }else {
        document.getElementById("alert").setAttribute("class", "alert alert-danger");
        document.getElementById("alert").innerHTML = "You've lost, Computer got " + pc_num
    }
}

function refresh(){
    window.location.reload()
}

