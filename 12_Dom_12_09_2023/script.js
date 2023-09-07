const decrement = document.getElementById("decrement");
const decrement10 = document.getElementById("decrement10");
const increment = document.getElementById("increment");
const increment10 = document.getElementById("increment10");
const reset = document.getElementById("reset");
const cont = document.getElementById("count");

// decrement.addEventListener("click", () => {
//     count.textContent = +count.textContent - 1 + "";
// });

decrement.addEventListener("click", () => x(-1));

decrement10.addEventListener("click", () => x(-10));

increment.addEventListener("click", () => x(1));

increment10.addEventListener("click", () => x(10));

reset.addEventListener("click", () => {
    count.textContent = "0";
});

function x(num) {
    count.textContent = +count.textContent + num + "";
}