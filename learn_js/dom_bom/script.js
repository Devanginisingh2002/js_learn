// alert("connected");

//example 1:
document
.getElementById("changeTextButton")
.addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph")
    // console.log(paragraph);
    paragraph.textContent = "this paragraph is changed";
})

//example 2:
document
.getElementById("highlightFirstCity")
.addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList")
    // console.log(citiesList);
    citiesList.firstElementChild.classList.add("highlight");
});

//example 3:
document
.getElementById("changeOrder")
.addEventListener("click", function () {
    let coffeeChange = document.getElementById("coffeeType")
    console.log(coffeeChange);
    coffeeChange.textContent = "Espresso";
    coffeeChange.style.backgroundColor = "Brown";
    coffeeChange.style.padding = "5px";
});

//example 4:
document
.getElementById("addNewItem")
.addEventListener("click", function(){
    let newItem = document.createElement("li");
    newItem.textContent = "Eggs";
    //just adding for learning
    newItem.style.backgroundColor = "Brown";
    newItem.style.border = "1px solid blue";

    document.getElementById("shoppingList").appendChild(newItem);
});

//example 5:
// document
// .getElementById("removeLastTask")
// // .addEventListener("click", function() {
//     .addEventListener("click", function() {
//     let taskList = document.getElementById("taskList");
//     taskList.lastElementChild.remove();
// })

document
.getElementById ("removeLastTask" )
.addEventListener("click", function () {
let taskList = document.getElementById("taskList");
taskList.lastElementChild. remove();
})

//example 6:
document
.getElementById("ClickMeButton")
.addEventListener("click", function(){
    alert("check the DOM Manipulation");
})

//example 7:
document
.getElementById("teaList")
.addEventListener("click", function (event) {
    // console.log(event);
    if(event.target && event.target.matches(".teaItem")) {
        alert("You Selected: " + event.target.textContent);
    }
})

//example 8:
document
.getElementById("feedbackForm")
.addEventListener("submit", function (event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    //paragraph
    document
    .getElementById("feedbackDisplay")
    .textContent = `Feedback is: ${feedback}`;
    
})

//example 9:
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("domStatus").textContent = "DOM Fully loaded";
})

//example 10:
//solution
document
.getElementById("toggleHighlight")
.addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
    // descriptionText.classList.add("highlight");
})

//trying bymself : adding css properties
/* document
.getElementById("toggleHighlight")
.addEventListener("click", function () {
    let check = document.getElementById("descriptionText");
    console.log(check);
    check.style.background = "skyblue";
}) */

