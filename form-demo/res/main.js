const messageButton = document.getElementById("show-message");
const message = document.getElementById("message");

if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
  const formItems = document.querySelectorAll("form .form-item:has(input)");
  formItems.forEach((item) => {
    item.classList.add("no-after");
    const label = item.querySelector("label");
    const input = item.querySelector("input");
    label.classList.add("text-xs", "-translate-y-2");
    input.classList.add("translate-y-2");

  });
}

console.log(messageButton);
messageButton.addEventListener("click", () => {
  message.classList.toggle("sr-only");
});
