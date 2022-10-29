let addCount = document.getElementById("add-count-btn");
let lowerCount = document.getElementById("lower-count-btn");

let count = document.getElementById("count")

function AddCounter() {
  count.innerHTML++;
}

function LowerCounter() {
  let countMinus = count.innerHTML;
  if (countMinus > 0){
    count.innerHTML--;
  }
}

lowerCount.addEventListener("click", LowerCounter);
addCount.addEventListener("click", AddCounter);