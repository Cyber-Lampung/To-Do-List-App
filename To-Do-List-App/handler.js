function Navbar() {
  const navbar = document.getElementById("navbar");
  const menu = document.getElementById("menu");
  const close = document.getElementById("close");

  menu.addEventListener("click", () => {
    navbar.style.top = "0px";
    navbar.style.transition = "all 0.5s ease";
  });

  close.addEventListener("click", () => {
    navbar.style.top = "1500px";
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
    addList.style.height = "150px";
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
  //lebar layar

  const Layar = window.innerWidth;
  console.log(Layar);

  const closeInputTugas = document.getElementById("closeInput");
  const boxInputTugas = document.getElementById("boxInputTugas");

  if (Layar >= 400 && Layar <= 600) {
    closeInputTugas.addEventListener("click", () => {
      boxInputTugas.style.top = "1500px";
      boxInputTugas.style.transition = "all 1s ease";
    });

    // click triger element
    const pencil = document.getElementById("pencil");

    pencil.addEventListener("click", () => {
      boxInputTugas.style.top = "660px";
      boxInputTugas.style.transition = "all 1s ease";
    });
  } else if (Layar <= 392) {
    closeInputTugas.addEventListener("click", () => {
      boxInputTugas.style.top = "1500px";
      boxInputTugas.style.transition = "all 1s ease";
    });

    // click triger element
    const pencil = document.getElementById("pencil");

    pencil.addEventListener("click", () => {
      boxInputTugas.style.top = "580px";
      boxInputTugas.style.transition = "all 1s ease";
    });
  } else if (Layar === 393) {
    closeInputTugas.addEventListener("click", () => {
      boxInputTugas.style.top = "1500px";
      boxInputTugas.style.transition = "all 1s ease";
    });

    // click triger element
    const pencil = document.getElementById("pencil");

    pencil.addEventListener("click", () => {
      boxInputTugas.style.top = "690px";
      boxInputTugas.style.transition = "all 1s ease";
    });
  }
}
HandlerInput();

function HandlerInputFile() {
  //lebar layar

  const Layar = window.innerWidth;

  const closeInputTugas = document.getElementById("closeInputFile");
  const boxInputTugasFile = document.getElementById("boxInputFile");

  // click triger element
  const file = document.getElementById("File");

  if (Layar >= 400 && Layar <= 600) {
    closeInputTugas.addEventListener("click", () => {
      boxInputTugasFile.style.top = "1500px";
      boxInputTugasFile.style.transition = "all 1s ease";
    });

    file.addEventListener("click", () => {
      boxInputTugasFile.style.top = "660px";
      boxInputTugasFile.style.transition = "all 1s ease";
    });
  } else if (Layar <= 392) {
    closeInputTugas.addEventListener("click", () => {
      boxInputTugasFile.style.top = "1500px";
      boxInputTugasFile.style.transition = "all 1s ease";
    });

    file.addEventListener("click", () => {
      boxInputTugasFile.style.top = "580px";
      boxInputTugasFile.style.transition = "all 1s ease";
    });
  } else if (Layar === 393) {
    closeInputTugas.addEventListener("click", () => {
      boxInputTugasFile.style.top = "1500px";
      boxInputTugasFile.style.transition = "all 1s ease";
    });

    file.addEventListener("click", () => {
      boxInputTugasFile.style.top = "690px";
      boxInputTugasFile.style.transition = "all 1s ease";
    });
  }
}
HandlerInputFile();
