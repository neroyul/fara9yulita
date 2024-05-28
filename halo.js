
function tampilkanDetailProduk(
  namaProduk,
  hargaProduk,
  detailProduk,
  gambarProduk
) {
  // Buat elemen popup
  const popup = document.createElement("div");
  popup.className = "popup";

  // Buat konten popup
  const popupContent = document.createElement("div");
  popupContent.className = "popup-content";

  // Tambahkan tombol close
  const closeBtn = document.createElement("span");
  closeBtn.className = "popup-close";
  closeBtn.innerHTML = "&times;";
  closeBtn.onclick = function () {
    tutupPopup();
  };

  // Tambahkan gambar produk
  const img = document.createElement("img");
  img.src = gambarProduk;
  img.alt = namaProduk;

  // Tambahkan nama produk
  const nama = document.createElement("h2");
  nama.textContent = namaProduk;

  // Tambahkan harga produk
  const harga = document.createElement("p");
  harga.className = "price";
  harga.textContent = "Harga: $" + hargaProduk;

  // Tambahkan detail produk
  const detail = document.createElement("p");
  detail.textContent = detailProduk;

  // Tambahkan tombol beli
  const tombolBeli = document.createElement("button");
  tombolBeli.className = "tombol-beli";
  tombolBeli.textContent = "Beli Sekarang";

  // Tambahkan elemen ke dalam popup
  popupContent.appendChild(closeBtn);
  popupContent.appendChild(img);
  popupContent.appendChild(nama);
  popupContent.appendChild(harga);
  popupContent.appendChild(detail);
  popupContent.appendChild(tombolBeli);

  popup.appendChild(popupContent);

  // Tambahkan popup ke dalam body
  document.body.appendChild(popup);
}

function tutupPopup() {
  const popup = document.querySelector(".popup");
  if (popup) {
    document.body.removeChild(popup);
  }
}



function filterKategori(kategori) {
  const produk = document.querySelectorAll(".product");

  for (const produkItem of produk) {
    const kategoriProduk = produkItem.getAttribute("data-kategori");

    if (kategori === "All" || kategori === kategoriProduk) {
      produkItem.style.display = "block";
    } else {
      produkItem.style.display = "none";
    }
  }
}



function cariBarang() {
  const inputPencarian = document.getElementById("cariBarang");
  const kataKunci = inputPencarian.value.toLowerCase();
  constproduk = document.querySelectorAll(".product");

  for (const produkItem of produk) {
    const namaProduk = produkItem
      .querySelector("h3")
      .textContent.toLowerCase();
    constdeskripsiProduk = produkItem
      .querySelector("p")
      .textContent.toLowerCase();

    function tutupPopup() {
      const popup = document.querySelector(".popup");

      if (popup) {
        document.body.removeChild(popup);
      }
    }
  }
}



function cariBarang() {
  const inputPencarian = document.getElementById("cariBarang");
  const kataKunci = inputPencarian.value.toLowerCase();
  const produk = document.querySelectorAll(".product");
  for (const produkItem of produk) {
    const namaProduk = produkItem
      .querySelector("h3")
      .textContent.toLocaleLowerCase();
    const deskripsiProduk = produkItem
      .querySelector("p")
      .textContent.toLocaleLowerCase();
    if (
      namaProduk.includes(kataKunci) ||
      deskripsiProduk.includes(kataKunci)
    ) {
      produkItem.style.display = "block";
    } else {
      produkItem.style.display = "none";
    }
  }
}



const keranjang = [];
const totalBelanja = 0;

function tambahkanProdukKeKeranjang(namaProduk, harga) {
  keranjang.push({
    nama: namaProduk,
    jumlah: 1,
    harga: harga,
  });
  updateKeranjang();
}

function updateKeranjang() {
  const daftarKeranjang = document.getElementById("daftar-keranjang");
  const totalBelanjaElem = document.getElementById("total-belanja");
  daftarKeranjang.innerHTML = "";
  let total = 0;
  keranjang.forEach((produk) => {
    const item = document.createElement("li");
    item.textContent = `${produk.nama} - Rp ${produk.harga.toFixed(2)}`;
    daftarKeranjang.appendChild(item);
    total += produk.harga;
  });
  totalBelanjaElem.textContent = `Rp ${total.toFixed(2)}`;
}

function checkout() {
  //Implementasi proses checkout (misalnya, pembayaran dan pengiriman)
  //Anda dapat menambahkan kode sesuai kebutuhan

  //menambah data keranjang ke sessionStorage
  //jika halaman di refresh maka sessionStorage akan hilang
  sessionStorage.setItem("keranjangBelanja", JSON.stringify(keranjang));
  //membuka halaman checkout ke tab baru menggunakan _blank
  window.open("checkout.html", "_blank");
}
