const btn = document.getElementById("multiply");
const num1 = document.getElementById("valueOne");
const num2 = document.getElementById("valueTwo");
const total = document.getElementById("result");
const msg = document.getElementById("msg");
const msg2 = document.getElementById("msg2");

msg.style.display = "none";
msg2.style.display = "none";

function multiple() {
  const act1 = num1.value;
  const act2 = num2.value;

  if (act2 === "") {
    msg2.style.display = "block";
    msg2.style.color = "red";
    msg2.textContent = "Fill this field!!";
    total.value = "";
  }

  if (act1 === "") {
    msg.style.display = "block";
    msg.style.color = "red";
    msg.textContent = "Fill this field!!";
    total.value = "";
  }

  if (num1.value !== "" && num2.value !== "") {
    total.value = Number(act1) * Number(act2);
    msg2.style.display = "none";
  }

  if (isNaN(act1) || act1.trim() === "") {
    alert("Please, enter numbers only!!");
  }

  if (isNaN(act2) || act2.trim() === "") {
    alert("Please, enter numbers only!!");
  }

  //   if (num1.value > 0 && num2.value == 0) {
  //     total.value = "undefined";
  //     msg2.style.display = "none";
  //   }

  console.log(total.value);
}

btn.addEventListener("click", multiple);

num1.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    multiple();
  }
});

num2.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    multiple();
  }
});

// let name = prompt("Enter name:");