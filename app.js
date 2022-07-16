"use strict";

// get value from input form
let obt_Mark = document.getElementById("obMarks");
let dis_Percentage = document.getElementById("perView");
let obt_Percenatge = document.getElementById("obPercentage");
let convert = document.getElementById("convert");
let checkGrade = document.getElementById("checkGrade");
let gradePlace = document.getElementById("gradePlace");
let reset = document.getElementById("reset");
let reset2 = document.getElementById("reset2");
let val;
let num;
let grade;
// increse font size
gradePlace.style.fontSize = "2rem";

//check grades
function multipleGrade(val) {
  if (val >= 80 && val <= 100) {
    gradePlace.textContent = "you got A++ grade";
  } else if (val >= 70 && val <= 79.9) {
    gradePlace.textContent = "you got A grade";
  } else if (val >= 60 && val <= 69.9) {
    gradePlace.textContent = "you got B grade";
  } else if (val >= 50 && val <= 59.9) {
    gradePlace.textContent = "you got C grade";
  } else if (val >= 40 && val <= 49.9) {
    gradePlace.textContent = "you got D grade";
  } else if (val >= 33 && val <= 39.9) {
    gradePlace.textContent = "you got E grade";
  } else {
    gradePlace.textContent = "you got F grade";
  }
}

//invalid number function
function numberCheck(num) {
  if (num < 0) {
    gradePlace.value = "enter valid number greater than 0";
  } else if (num > 550) {
    gradePlace.value = "enter valid number less than 550";
  } else {
    num = obt_Mark.value;
  }
}

// determine percentage
function convertGrades(num) {
  if (num < 0) {
    dis_Percentage.value = 0;
  } else if (num > 550) {
    dis_Percentage.value = 0;
  } else {
    return (grade = ((num / 550) * 100).toFixed(2));
  }
}
// grades funtion
function grades() {
  if (obt_Mark.value === "") {
    dis_Percentage.value = "";
    gradePlace.textContent = "";
  } else {
    num = obt_Mark.value;
    numberCheck(num);
    val = convertGrades(num);
    dis_Percentage.value = val;
    multipleGrade(val);
  }
}

//reset funtion
function remake() {
  obt_Mark.value = "";
  dis_Percentage.value = "";
  gradePlace.textContent = "";
}

//check grades funtion
checkGrade.addEventListener("click", function () {
  if (obt_Percenatge.value === "") {
    gradePlace.textContent = "";
  } else {
    num = obt_Percenatge.value;
    numberCheck(num);
    val = obt_Percenatge.value;
    multipleGrade(val);
  }
});

//button event handlers
convert.addEventListener("click", grades);
reset.addEventListener("click", remake);
reset2.addEventListener("click", remake);
