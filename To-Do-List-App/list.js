const btn = document.getElementById("btn");
const listItems = document.getElementById("List");

function renderList() {
  const get = localStorage.getItem("list");
  let list = get ? JSON.parse(get) : [];

  //   kosongkan dulu element listItems

  listItems.innerHTML = "";

  // pecah list menjadi beberapa list bagian

  list.forEach((itemsList) => {
    const halaman = `
    
        <div>
            <h1>${itemsList.Judul}</h1>
            <p>${itemsList.Desc}</P>
        </div>
    
    `;

    listItems.innerHTML += halaman;
  });
}

btn.addEventListener("click", () => {
  const Judul = document.getElementById("Judul").value;
  const Desc = document.getElementById("Desc").value;

  // validasi data

  if (!Judul || !Desc) {
    return;
  }

  const isi = { Judul, Desc };

  //   ambil data lama

  const get = localStorage.getItem("list");
  let list = get ? JSON.parse(get) : [];

  list.push(isi);

  // kirim ulang data ke localStorage

  localStorage.setItem("list", JSON.stringify(list));

  console.log("Berhasil kirim data ", list);

  renderList();
});

window.onload = renderList();
