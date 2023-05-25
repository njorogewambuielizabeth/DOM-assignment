let body = document.body.style.backgroundColor='silver';
document.getElementById('title').style.color='green';


document.querySelectorAll("h3").forEach(element => element.style.textTransform = "uppercase");

// new fruit
let fruitsList = document.getElementById("fruList");
let newFruit = document.createElement("li");
newFruit.textContent = "Grapes";
fruitsList.appendChild(newFruit);

// new vegetable
let vegetableList = document.getElementById('vegList');
let newVegetable = document.createElement('li');
newVegetable.textContent="Cucumber";
vegetableList.appendChild(newVegetable);