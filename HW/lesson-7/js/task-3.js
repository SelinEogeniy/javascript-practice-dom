const refsHw3 = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refsHw3.input.addEventListener("input", () => {
  const value = refsHw3.input.value.trim();

  refsHw3.output.textContent = value === "" ? "Anonymous" : value;
});
