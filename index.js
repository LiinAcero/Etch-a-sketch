window.onload = function () {
    const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    cell.addEventListener(
      "mouseover",
      (event) => {
          cell.style.backgroundColor =`rgb(${red}, ${green}, ${blue})`;
    
          setTimeout(() => {
            cell.style.backgroundColor = "black";
          }, 500);
      },
      false
    );
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};
function deleteChild(container){
      document.getElementById(container).innerHTML = "";
}


const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  let sign = prompt("Choose the amount of square grids.");
  if (sign > 100){
      false
  } else{
    deleteChild("container")
    makeRows(sign,sign)
  }
});

makeRows(16, 16);
}
