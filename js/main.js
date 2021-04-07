const averageAge = 79;
let age;
let ageAfter = document.querySelector('#ageAfter');

let total = 0;
let para = document.querySelector('#announce');
let totalOut = document.querySelector('#total');

// BAD HABITS
let fastFood = { name: "Fast Food", value: 0, buttID: 'fastFood', }
let candy = { name: "Candy", value: 0, buttID: "candy" }
let iceCream = { name: "Ice Cream", value: 0, buttID: "iceCream" }
let smoke = { name: "Smoking", value: 0, buttID: "smoke"}
let coc = { name: "Cocaine", value: 0, buttID: "coc"}
let alcohol = { name: "Alcohol", value: 0, buttID: "alcohol"}
let soda = { name: "Soda", value: 0, buttID: "soda"}
let eatAll = { name: "Eating Everything", value: 0, buttID: "eatAll"}

//GOOD HABITS
let veggies = { name: "Eating Veggies", value: 0, buttID: "veggies"}
let getSun = { name: "Sun", value: 0, buttID: "getSun"}
let noSugar = { name: "No Sugar", value: 0, buttID: "noSugar"}
let superFood = { name: "Eating Super Foods", value: 0, buttID: "superFood"}

//FITNESS HABITS  exercise weightLift overweight
let exercise = { name: "Exercise", value: 0, buttID: "exercise"}
let weightLift = { name: "Weight Lifting", value: 0, buttID: "weightLift"}
let overweight = { name: "Overweight", value: 0, buttID: "overweight"}




function addHabit(habit, amount){

    age = document.getElementById('currentAge').value;
    ageNum = Number(age);
    //console.log(ageNum + typeof(ageNum));

    if(isNaN (ageNum)){
        para.textContent = age + " IS NOT A NUMBER!";
        return;
    }

    //console.log(age + "ageafter");

    if(habit.value === 0){
        document.getElementById(habit.buttID).style.backgroundColor='green';
  	    habit.value = 1;
        total = total + amount;
        para.textContent = habit.name + " has been added!";

        //console.log(habit.value + " " + total)

    }else if(habit.value === 1){
        document.getElementById(habit.buttID).style.backgroundColor='#d3d3d3';
        habit.value = 0;
        total = total - amount;
        para.textContent = habit.name + " has been removed!";
    }

  totalOut.textContent = "You have " + ((averageAge + total) - age) + " years left to live!";
  ageAfter.textContent = "You will DIE at the age of: " + (averageAge + total);
}
