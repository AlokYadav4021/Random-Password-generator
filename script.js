const btn1 = document.querySelector(".btn");
const input1 = document.getElementById("input");
const copyIcon1 = document.querySelector(".fa-copy");
const aletContainer1 = document.querySelector(".alert-container");

btn1.addEventListener("click", () => {
  createPassword();
});

copyIcon1.addEventListener("click", () => {
  copyPassword();
  if (input1.value) {
    aletContainer1.classList.remove("active");
    setTimeout(() => {
      aletContainer1.classList.add("active");
    }, 2000);
  }
});

function createPassword() {
  const Chars =
    "a!b\"c#d$e%f&g'h(i)j*k+l,m-n.o/p:q;r<s=t>u?v@w[x\\y]z^1_2`3{4|5}6~7A8B9C0DExFyGzHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * Chars.length);
    password += Chars.substring(randomNum, randomNum + 1);
  }
  input1.value = password;
  aletContainer1.innerText = password + " copied!";
}

function copyPassword() {
  input1.select();
  input1.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(input1.value);
}
