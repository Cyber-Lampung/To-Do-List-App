const BtnKirimInput = document.getElementById("BtnKirimInput");

function RenderHalaman() {
  // get data dari localStorage

  const get = localStorage.getItem("list");
  let checkData = get ? JSON.parse(get) : [];

  const ItemsRender = document.getElementById("List");

  ItemsRender.innerHTML = "";

  checkData.forEach((data) => {
    const Render = `
  
       <div
        id="List"
        class="border-2 border-white w-[90%] m-auto mt-5 p-2 rounded-lg flex items-center gap-6"
        >
            <div class="iconCheck">
                <input type="checkbox" class="text-2xl" id="selesai" />
            </div>
            <div class="isi w-[70%]">
                <label for="selesai">
                <h1 class="text-xl font-bold text-white" id="selesai">${data.Judul}</h1>
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
