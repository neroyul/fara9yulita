console.log('Haloooooo');
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

const formulirCheckout = document.getElementById('formulir-checkout');

console.log(formulirCheckout);

formulirCheckout.addEventListener('submit', (e) => {
  console.log('Ini diklik0');
  const namaPelanggan = document.getElementById('nama').value;
  console.log(namaPelanggan);
  const rt = document.getElementById('rt').value;
  console.log(rt);
  const rw = document.getElementById('rw').value;
  console.log(rw);
  const desa = document.getElementById('desa').value;
  console.log(desa);
  const kecamatan = document.getElementById('kecamatan').value;
  console.log(kecamatan);
  const kota = document.getElementById('kota').value;
  console.log(kota);
  const kodepos = document.getElementById('kode-pos').value;
  console.log(kodepos);
  const ongkir = document.getElementById('ongkir').value;
  console.log(ongkir);
  const email = document.getElementById('email').value;
  console.log(email);
  const telepon = document.getElementById('telepon').value;
  console.log(telepon);
  const bank = document.getElementById('bank').value;
  console.log(bank);
  const norek = document.getElementById('nomor-rekening').value;
  console.log(norek);
  const namaRekening = document.getElementById('nama-rekening').value;
  console.log(namaRekening);
  const cabang = document.getElementById('cabang').value;
  console.log(cabang);

  sessionStorage.setItem('namaPelanggan', JSON.stringify(namaPelanggan));
  sessionStorage.setItem(
    'alamatpengiriman',
    JSON.stringify(
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
});