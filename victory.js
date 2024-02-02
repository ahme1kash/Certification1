document.addEventListener("DOMContentLoaded", function () {
    const rule = document.querySelector(".button_div")
    rule.style.right="2em"
    rule.style.fontSize="-2em"
    rule.style.fontWeight="400"
    const toggleButton = document.querySelector(".btn_Rule");
    const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
  // Toggle the visibility of the content box
  contentBox.style.display = "none";
});

toggleButton.addEventListener("click", () => {
  // Toggle the visibility of the content box
  contentBox.style.display =
    contentBox.style.display === "none" ? "block" : "none";
});
  let reset = document.querySelector(".reset");
  reset.innerHTML = "PLAY AGAIN";
  reset.style.width = "142px";
  reset.style.height = "44px";
  reset.style.border = "none";

  reset.style.cursor = "pointer";
  reset.style.backgroundColor = "#ffffff";
  reset.style.borderRadius = "9px";
  reset.style.color = "Grey";
  reset.style.marginTop = "-3.5em";
  reset.style.marginLeft = "4em";
  reset.style.fontSize = "1.2em";
  reset.style.fontWeight = "900";
  reset.onclick = function () {
    location.href = "./index.html";
  };
});
