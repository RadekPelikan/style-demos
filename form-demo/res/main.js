


if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
  const formItems = document.querySelectorAll("form .form-item:has(input)");
  formItems.forEach((item) => {
    const label = item.querySelector("label");
    const input = item.querySelector("input");
    label.classList.add("text-xs", "-translate-y-2");
    input.classList.add("translate-y-2");
  });
}
