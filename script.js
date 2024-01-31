const btnDecre = document.getElementById("decre");
const btnReset = document.getElementById("reset");
const btnIncre = document.getElementById("incre");
const value = document.getElementById("value");
let count = 0; // Set the initial count value

btnDecre.addEventListener("click", () => {
  count = count - 1;
  if (count < 0) value.style.color = "red";
  value.innerText = count;
});

btnReset.addEventListener("click", () => {
  count = 0;
  value.style.color = "black";
  value.innerText = count;
});

btnIncre.addEventListener("click", () => {
  count = count + 1;
  if (count > 0) value.style.color = "green";
  value.innerText = count;
});

// Set the initial count value when the page loads
value.innerText = count;
