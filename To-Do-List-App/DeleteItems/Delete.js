const listElement = document.querySelectorAll(".DelItems");
const IconDel = document.querySelectorAll("#trash");

function checks() {
  IconDel.forEach((Del, index) => {
    // debug awal => untuk mendapatkan index list
    //   console.log(index);
    Del.addEventListener("click", () => {
      const delDataList = confirm("Apakah kamu yakin ingin mengapus ini ? ");

      if (delDataList) {
        listElement.forEach((items, delIndex) => {
          // debug untuk mendapatkan data element dari element website
          // console.log(items);

          // debug untuk mendapatkan data setiap index data di local

          const found = index === delIndex;

          // debug found untuk mencocokkan index local dengan local Array jika ada maka true

          // console.log(found);

          const get = localStorage.getItem("list");
          // debug get apakah dia mendapatkan data dari localStorage =>

          // console.log(get); // / output => [{"Judul":"input","Description":"inputusername"}]

          // pecah check menjadi data asli

          const check = get ? JSON.parse(get) : [];

          // debug check apakah ada dan jika ada maka ubah ke data aslinya

          // console.log("check length : ", check.length); // => output => Array [{"Judul":"input","Description":"inputusername"}]

          if (check[index]) {
            check.splice(index);
            console.log(check);
            localStorage.setItem("list", JSON.stringify(check));
            location.reload();
          }
        });
      }
    });
  });
}
checks();
