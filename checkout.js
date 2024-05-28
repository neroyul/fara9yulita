const formulirCheckout = document.getElementById('formulir-checkout');

console.log(formulirCheckout);

formulirCheckout.addEventListener('submit', (e) => {
  console.log('Ini diklik0');
  // const namaPelanggan = document.getElementById("nama").value;
});

console.log('Testing berhasil');
const keranjangBelanja = JSON.parse(sessionStorage.getItem('keranjangBelanja'));

const daftarKeranjang = document.getElementById('daftar-keranjang');
const totalBelanjanya = document.getElementById('total-belanjanya');
let totalBelanja = 0;

keranjangBelanja.forEach((produk) => {
  const itemProduk = document.createElement('tr');
  itemProduk.innerHTML = `
                <td>${produk.nama}</td>
                <td style="text-align: center;">${produk.jumlah}</td>
                <td style="text-align: right;">Rp.${produk.harga.toLocaleString(
                  'id-ID'
                )}</td>
                <td style="text-align: right;">Rp.${(
                  produk.jumlah * produk.harga
                ).toLocaleString('id-ID')}</td>
                `;

  daftarKeranjang.appendChild(itemProduk);
  totalBelanja += produk.jumlah * produk.harga;
});
{
totalBelanjanya.textContent = Rp. $totalBelanja.toLocaleString('id-ID')};

const selesaikanpembayaran = (e) => {
  console.log('Ini diklik0');
  const namaPelanggan = document.getElementById('nama').value;

  console.log(namaPelanggan);
  const alamat = document.getElementById('alamat').value;
  const rt = document.getElementById('rt').value;
  const rw = document.getElementById('rw').value;
  const desa = document.getElementById('desa').value;
  const kecamatan = document.getElementById('kecamatan').value;
  const kota = document.getElementById('kota').value;
  const kodepos = document.getElementById('kode-pos').value;
  const ongkir = document.getElementById('ongkir').value;
  const email = document.getElementById('email').value;
  const telepon = document.getElementById('telepon').value;
  const bank = document.getElementById('bank').value;
  const norek = document.getElementById('nomor-rekening').value;
  const namaRekening = document.getElementById('nama-rekening').value;
  const cabang = document.getElementById('cabang').value;

  sessionStorage.setitem('namapelanggan', JSON.stringify(namaPelanggan));
  sessionStorage.setItem(
    'alamatpengiriman',
    JSON.stringify(
      alamat +
        ' rt :' +
        rt +
        ' rw :' +
        rw +
        ' desa :' +
        desa +
        ' kecamatan :' +
        kecamatan +
        ' kota/kab :' +
        kota +
        ' kodepos :' +
        kodepos
    )
  );
  sessionStorage.setItem('email', JSON.stringify(email));
  sessionStorage.setItem('telepon', JSON.stringify(telepon));
  sessionStorage.setItem('ongkir', JSON.stringify(ongkir));
  sessionStorage.setItem('bank', JSON.stringify(bank));
  sessionStorage.setItem('norek', JSON.stringify(norek));
  sessionStorage.setItem('namarekening', JSON.stringify(namaRekening));
  sessionStorage.setItem('cabang', JSON.stringify(cabang));
};