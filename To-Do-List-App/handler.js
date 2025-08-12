function Navbar() {
  const navbar = document.getElementById("navbar");
  const menu = document.getElementById("menu");
  const close = document.getElementById("close");

  menu.addEventListener("click", () => {
    navbar.style.top = "0px";
    navbar.style.transition = "all 0.5s ease";
  });

  close.addEventListener("click", () => {
    navbar.style.top = "900px";
    navbar.style.transition = "all 0.5s ease";
  });
}

Navbar();

const mouseover = document.getElementById("mouseover");
const addList = document.getElementById("listAdd");
const check = document.getElementById("check");
const add = document.getElementById("AddTugas");
const rotate = document.getElementById("mouseover");

mouseover.onmouseover = () => {
  check.checked = true;
  rotate.style.transition = "all 0.5s ease";
  rotate.style.transform = "rotate(270deg)";

  if (check.checked) {
    addList.style.height = "200px";
    addList.style.opacity = "1";
  }

  addList.style.transition = "all 2s ease";
};

mouseover.onmouseleave = () => {
  check.checked = false;

  setTimeout(() => {
    if (check.checked == false) {
      addList.style.height = "0px";
      rotate.style.transition = "all 0.5s ease";
      rotate.style.transform = "rotate(0deg)";
    }
  }, 4000);
};

function HandlerInput() {
  const closeInputTugas = document.getElementById("closeInput");
  const boxInputTugas = document.getElementById("boxInputTugas");

  closeInputTugas.addEventListener("click", () => {
    boxInputTugas.classList.add("hidden");
  });

  // click triger element
  const pencil = document.getElementById("pencil");

  pencil.addEventListener("click", () => {
    boxInputTugas.classList.remove("hidden");
  });
}
HandlerInput();
