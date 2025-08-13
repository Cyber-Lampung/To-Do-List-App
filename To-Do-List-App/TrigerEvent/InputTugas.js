const BtnKirimInput = document.getElementById("BtnKirimInput");

function RenderHalaman() {
  // get data dari localStorage

  const get = localStorage.getItem("list");
  let checkData = get ? JSON.parse(get) : [];

  const ItemsRender = document.getElementById("List");

  ItemsRender.innerHTML = "";

  checkData.forEach((data, index) => {
    const Render = `
  
       <div
        class="border-2 border-white w-[90%] m-auto mt-5 p-2 rounded-lg flex items-center gap-6"
        >
            <div class="iconCheck">
                <input type="checkbox" class="selesaicheck text-2xl" data-index="${index}" ${
      data.done ? "checked" : ""
    }/>
            </div>
            <div class="isi w-[70%]">
                <label for="peer">
                  <h1 class="text-xl font-bold text-white peer-has-checked:hidden judulTugas" >
                    ${data.Judul}
                  </h1>
                  <p class="text-sm text-white font-semibold truncate">
                      ${data.Description}
                  </p>
                </label>
            </div>
            <div class="trash">
                <i class="trashIcon bi-trash-fill text-white text-2xl"></i>
            </div>
        </div>

    `;

    ItemsRender.innerHTML += Render;
  });

  // pasang event listiner sehabis di render

  document.querySelectorAll(".selesaicheck").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const index = this.getAttribute("data-index");
      checkData[index].done = this.checked;
      localStorage.setItem("list", JSON.stringify(checkData));

      const parent =
        this.parentElement.nextElementSibling.querySelector(".judulTugas");

      parent.style.textDecoration = this.checked
        ? "line-through black 2px"
        : "none";
    });
  });
}

RenderHalaman();

BtnKirimInput.addEventListener("click", () => {
  const Judul = document.getElementById("Judul").value;
  const Description = document.getElementById("Description").value;

  const ValueBaru = { Judul, Description };
  //   get data items jika ada

  const get = localStorage.getItem("list");
  let check = get ? JSON.parse(get) : [];

  check.push(ValueBaru);

  //   simpan data baru dalam localStorage
  localStorage.setItem("list", JSON.stringify(check));

  RenderHalaman();
});

window.onload = RenderHalaman();
