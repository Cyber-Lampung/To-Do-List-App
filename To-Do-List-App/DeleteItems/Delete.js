const listElement = document.querySelectorAll(".DelItems");
const IconDel = document.querySelectorAll("#trash");

function checks() {
  IconDel.forEach((Del, index) => {
    //   console.log(index);
    Del.addEventListener("click", () => {
      const delDataList = confirm("Apakah kamu yakin ingin mengapus ini ? ");

      if (delDataList) {
        listElement.forEach((items, delIndex) => {
          const found = index === delIndex;
          const get = localStorage.getItem("list");
          const check = get ? JSON.parse(get) : [];

          if (found) {
            delete check[delIndex];
            localStorage.setItem("list", JSON.stringify(check));
            localStorage.removeItem("list");
            window.location.href = "";
          }

          // pecah check menjadi data asli
        });
      }
    });
  });
}
checks();
