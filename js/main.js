const averageAge = 78.3;
let age;
let livesLeft;

let total = 0;
let para = document.querySelector('#error');
let totalOut = document.querySelector('#total');

let fastFood = {
	name: "Fast Food",
    value: 0,
    buttID: 'fastFood',
}
let candy = {
	name: "Candy",
    value: 0,
    buttID: "candy"
}

function addHabit(habit, amount){
    //document.getElementById(habit.buttID).style.backgroundColor='green';
    
  if(habit.value === 0){
    document.getElementById(habit.buttID).style.backgroundColor='green';
  	habit.value = 1;
    total = total + amount;
    para.textContent = habit.name + " has been added!";

    console.log(habit.value + " " + total)
  }else if(habit.value === 1){
    document.getElementById(habit.buttID).style.backgroundColor='#d3d3d3';
    habit.value = 0;
    total = total - amount;
    para.textContent = habit.name + " has been removed!";
  }
  totalOut.textContent = "Total is: " + total;
}
