<template>
  <section>
    <!-- Hero Section -->
    <div class="bg-black text-white text-center py-16 shadow-lg">
      <h1 class="text-4xl font-extrabold mb-4">Profil Desa Pangarengan</h1>
      <p class="text-lg max-w-2xl mx-auto">
        Mengenal lebih dekat Desa Pangarengan: sejarah, visi misi, dan potensi
        yang dimiliki.
      </p>
    </div>

    <!-- Sejarah -->
    <div class="mt-16">
      <h2 class="text-2xl font-bold mb-6 text-center">Sejarah Desa</h2>
      <div
        class="bg-white p-6 rounded-xl shadow max-w-4xl mx-auto text-gray-700 leading-relaxed"
      >
        <p class="mb-4 text-justify">
          Asal-usul nama Desa Pangarengan tidak diketahui secara pasti, namun
          dalam bahasa Sunda kata Pangarengan (Pang-areng-an) dimaknai sebagai
          tempat pembuatan areng atau arang, yaitu bara kayu hasil pembakaran
          batang pohon yang sejak dahulu digunakan sebagai bahan pelicin setrika
          hingga kini masih dipakai pedagang sate, jagung, dan ikan bakar.
          Sebagian warga meyakini bahwa nama tersebut muncul karena desa ini
          dulunya merupakan sentra pembuatan arang, sementara sebagian lainnya
          menilai bahwa nama Pangarengan hanya sekadar sebutan desa tanpa makna
          khusus. Pada masa lalu, desa ini dialiri sungai Cipunagara yang
          bercabang ke barat dan timur dengan lebar sekitar 40 meter dan
          kedalaman 20 meter, yang memiliki nilai sejarah karena menjadi tempat
          ditenggelamkannya perahu Belanda oleh pasukan Belanda sendiri saat
          menghadapi Jepang tahun 1942, namun kini kedua alirannya telah dangkal
          dan dikenal sebagai Sungai Pancerkulon di barat serta Sungai
          Pancerwetan di timur.
        </p>
      </div>
    </div>

    <!-- Visi & Misi -->
    <div class="mt-20">
      <h2 class="text-2xl font-bold mb-10 text-center">Visi & Misi Desa</h2>
      <div class="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-3 text-green-700">Visi</h3>
          <p class="text-gray-700">
            “Terwujudnya Desa Pangarengan Sebagai Daerah Agrobisnis, Mandiri,
            Sejahtera dan Berwawasan Lingkungan yang Berbasis Gotong Royong pada
            tahun 2020”.
          </p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-3 text-green-700">Misi</h3>
          <ul class="list-disc text-gray-700 space-y-2">
            <li>
              Meningkatkan kualitas SDM yang cerdas, sehat, terampil, mandiri,
              berakhlak mulia, serta beriman dan bertaqwa kepada Tuhan Yang Maha
              Esa.
            </li>
            <li>
              Meningkatkan kesejahteraan masyarakat melalui pendidikan dan
              kesehatan yang berlandaskan iman dan takwa.
            </li>
            <li>
              Mengoptimalkan potensi sumber daya alam untuk pengembangan ekonomi
              kerakyatan yang berkelanjutan.
            </li>
            <li>
              Meningkatkan produktivitas dan nilai tambah hasil potensi daerah
              dengan tetap memperhatikan kelestarian lingkungan.
            </li>
            <li>
              Meningkatkan kualitas sarana dan prasarana desa melalui semangat
              gotong royong.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Struktur Pemerintah Desa -->
    <!-- <div class="mt-20">
      <h2 class="text-2xl font-bold text-center mb-10">
        Struktur Pemerintahan Desa
      </h2>
      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="avatar"
            alt="Kepala Desa"
            class="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Ibu Atifah Noorlela S.ip</h3>
          <p class="text-gray-600">Kepala Desa</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="avatar"
            alt="Sekretaris Desa"
            class="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Otong Soekarno</h3>
          <p class="text-gray-600">Sekretaris Desa</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="avatar"
            alt="Bendahara"
            class="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">[Nama Bendahara]</h3>
          <p class="text-gray-600">Bendahara Desa</p>
        </div>
      </div>
    </div> -->

    <div class="mt-20">
      <h2 class="text-2xl font-bold text-center mb-10">
        Struktur Pemerintahan Desa
      </h2>

      <!-- Kepala Desa & Sekretaris -->
      <div class="grid grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="Kades"
            alt="Kepala Desa"
            class="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Atifah Noorlaela.S.IP</h3>
          <p class="text-gray-600">Kepala Desa</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="Sekdes"
            alt="Sekretaris Desa"
            class="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Otong Soekarno</h3>
          <p class="text-gray-600">Sekretaris Desa</p>
        </div>
      </div>

      <!-- Kasie / Kaur -->
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12"
      >
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="Asep"
            alt="Kasie Pemerintahan"
            class="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Asep Susanto</h3>
          <p class="text-gray-600">Kasie Pemerintahan</p>
          <small>
            <p class="text-gray-600">Ngatini</p>
            <p class="text-gray-600 text-tiny">M. Ridwan</p>
          </small>
        </div>
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="Hoerul"
            alt="Kasie Kesejahteraan"
            class="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Haerul Anwar</h3>
          <p class="text-gray-600">Kasie Kesejahteraan</p>
          <small>
            <p class="text-gray-600">Sukinah, S. Hum</p>
            <p class="text-gray-600">Fitroh Sholeha</p>
          </small>
        </div>
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="Salim"
            alt="Kasie Tata Usaha & Umum"
            class="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Salim Syarifudin</h3>
          <p class="text-gray-600">Kasie Tata Usaha & Umum</p>
          <small>
            <p class="text-gray-600">Adi, S.Pd</p>
            <p class="text-gray-600">Rizki Darmawan, S.Kom</p>
          </small>
        </div>
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="avatar"
            alt="Kaur Keuangan"
            class="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Sumarno</h3>
          <p class="text-gray-600">Kaur Keuangan</p>
          <small>
            <p class="text-gray-600">Vina Sulvianita, S.AN</p>
            <p class="text-gray-600">Tarlan</p>
          </small>
        </div>
      </div>

      <!-- Kasun -->
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto"
      >
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="Zaenal"
            alt="Kasun 1"
            class="w-20 h-20 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Zaenal Abidin</h3>
          <p class="text-gray-600">Kasun 1</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="Iha"
            alt="Kasun 2"
            class="w-20 h-20 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Iha Muhayati</h3>
          <p class="text-gray-600">Kasun 2</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="Muhidin"
            alt="Kasun 3"
            class="w-20 h-20 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Muhidin</h3>
          <p class="text-gray-600">Kasun 3</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="Ahmadi"
            alt="Kasun 4"
            class="w-20 h-20 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Ahmadi</h3>
          <p class="text-gray-600">Kasun 4</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="Toto"
            alt="Kasun 5"
            class="w-20 h-20 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Toto</h3>
          <p class="text-gray-600">Kasun 5</p>
        </div>
      </div>
    </div>
    <div class="mt-20 grid md:grid-cols-1 gap-8 max-w-6xl mx-auto text-center">
      <h2 class="text-2xl font-bold text-center mb-6">
        Daftar Kepala Desa Pangarengan
      </h2>
      <div class="overflow-x-auto">
        <table class="min-w-full border border-gray-300">
          <thead class="bg-gray-100">
            <tr class="text-center">
              <th class="border border-gray-300 px-4 py-2">No</th>
              <th class="border border-gray-300 px-4 py-2">Nama Kepala Desa</th>
              <th class="border border-gray-300 px-4 py-2">Periode</th>
              <th class="border border-gray-300 px-4 py-2">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">1</td>
              <td class="border border-gray-300 px-4 py-2 text-left">
                Bpk. Suryadi
              </td>
              <td class="border border-gray-300 px-4 py-2">1965 - 1969</td>
              <td class="border border-gray-300 px-4 py-2">Kepala Desa</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">2</td>
              <td class="border border-gray-300 px-4 py-2 text-left">
                Bpk. Cala
              </td>
              <td class="border border-gray-300 px-4 py-2">1969 - 1970</td>
              <td class="border border-gray-300 px-4 py-2">PJS</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">3</td>
              <td class="border border-gray-300 px-4 py-2 text-left">
                Bpl. Cakim
              </td>
              <td class="border border-gray-300 px-4 py-2">1970 - 1975</td>
              <td class="border border-gray-300 px-4 py-2">Kepala Desa</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">4</td>
              <td class="border border-gray-300 px-4 py-2 text-left">
                Bpk. Urip Suparjo
              </td>
              <td class="border border-gray-300 px-4 py-2">1975 - 1976</td>
              <td class="border border-gray-300 px-4 py-2">PJS</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">5</td>
              <td class="border border-gray-300 px-4 py-2 text-left">
                Bapak Darmomin
              </td>
              <td class="border border-gray-300 px-4 py-2">1976 - 1977</td>
              <td class="border border-gray-300 px-4 py-2">PJS</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">6</td>
              <td class="border border-gray-300 px-4 py-2 text-left">
                Bpk. Alan Sutarlan
              </td>
              <td class="border border-gray-300 px-4 py-2">1978 - 1983</td>
              <td class="border border-gray-300 px-4 py-2">Kepala Desa</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">7</td>
              <td class="border border-gray-300 px-4 py-2 text-left">
                Bpk. Nurwatin
              </td>
              <td class="border border-gray-300 px-4 py-2">1983 - 1985</td>
              <td class="border border-gray-300 px-4 py-2">PJS</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">8</td>
              <td class="border border-gray-300 px-4 py-2 text-left">
                Bpk. Abdul Hanah
              </td>
              <td class="border border-gray-300 px-4 py-2">1985 - 1939</td>
              <td class="border border-gray-300 px-4 py-2">Kepala Desa</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">9</td>
              <td class="border border-gray-300 px-4 py-2 text-left">
                Bpk. Casbari
              </td>
              <td class="border border-gray-300 px-4 py-2">1993 - 1999</td>
              <td class="border border-gray-300 px-4 py-2">Kepala Desa</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">10</td>
              <td class="border border-gray-300 px-4 py-2 text-left">
                Bpk. Rasji
              </td>
              <td class="border border-gray-300 px-4 py-2">1999 - 2000</td>
              <td class="border border-gray-300 px-4 py-2">PJS</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">11</td>
              <td class="border border-gray-300 px-4 py-2 text-left">
                Bpk. Uhem
              </td>
              <td class="border border-gray-300 px-4 py-2">2001 - 2006</td>
              <td class="border border-gray-300 px-4 py-2">Kepala Desa</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">12</td>
              <td class="border border-gray-300 px-4 py-2 text-left">
                Ibu Atifah Noorlaela.S.IP
              </td>
              <td class="border border-gray-300 px-4 py-2">2006 - 2012</td>
              <td class="border border-gray-300 px-4 py-2">Kepala Desa</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">13</td>
              <td class="border border-gray-300 px-4 py-2 text-left">
                Ibu Atifah Noorlaela.S.IP
              </td>
              <td class="border border-gray-300 px-4 py-2">2012 - 2018</td>
              <td class="border border-gray-300 px-4 py-2">Kepala Desa</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">14</td>
              <td class="border border-gray-300 px-4 py-2 text-left">
                Ibu Atifah Noorlaela.S.IP
              </td>
              <td class="border border-gray-300 px-4 py-2">2018 - 2026</td>
              <td class="border border-gray-300 px-4 py-2">
                Kepala Desa Aktif
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Data Demografi -->
    <div class="mt-20 mb-16">
      <h2 class="text-2xl font-bold text-center mb-10">
        Gambaran Umum Potensi Desa Pangarengan
      </h2>

      <!-- Potensi Umum -->
      <h3 class="text-xl font-semibold text-center mb-6">Potensi Umum</h3>
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-black">Batas Desa</h4>
          <p class="text-gray-700 mt-2 text-sm">Utara: Laut Jawa</p>
          <p class="text-gray-700 text-sm">Selatan: Desa Bobos</p>
          <p class="text-gray-700 text-sm">Timur: Desa Patimban</p>
          <p class="text-gray-700 text-sm">Barat: Desa Legonkulon</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-black">Luas Wilayah</h4>
          <p class="text-gray-700 mt-2 text-sm">Total: 1.883,70 Ha</p>
          <p class="text-gray-700 text-sm">Pesawahan: 396,70 Ha</p>
          <p class="text-gray-700 text-sm">Perkebunan: 2,50 Ha</p>
          <p class="text-gray-700 text-sm">Perhutanan: 1.087,00 Ha</p>
          <p class="text-gray-700 text-sm">Perkantoran: 0,80 Ha</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-black">Iklim</h4>
          <p class="text-gray-700 mt-2 text-sm">Curah Hujan: 2.175 mm</p>
          <p class="text-gray-700 text-sm">Bulan Hujan: 4 bulan</p>
          <p class="text-gray-700 text-sm">Suhu rata-rata: 35°C</p>
          <p class="text-gray-700 text-sm">Tinggi: 1 mdl</p>
        </div>
      </div>

      <!-- Orbitasi -->
      <h3 class="text-xl font-semibold text-center mt-12 mb-6">Orbitasi</h3>
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-black">Kecamatan</h4>
          <p class="text-gray-700 mt-2 text-sm">Jarak: 3,5 Km</p>
          <p class="text-gray-700 text-sm">Waktu: 0,25 Jam</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-black">Kabupaten</h4>
          <p class="text-gray-700 mt-2 text-sm">Jarak: 56 Km</p>
          <p class="text-gray-700 text-sm">Waktu: 1,5 Jam</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-black">Provinsi</h4>
          <p class="text-gray-700 mt-2 text-sm">Jarak: 150,5 Km</p>
        </div>
      </div>

      <!-- Sumber Daya Alam -->
      <h3 class="text-xl font-semibold text-center mt-12 mb-6">
        Sumber Daya Manusia
      </h3>
      <div class="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-black">Laki-laki</h4>
          <p class="text-gray-700 mt-2">2.545 Jiwa</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-black">Perempuan</h4>
          <p class="text-gray-700 mt-2">2.385 Jiwa</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-black">Total</h4>
          <p class="text-gray-700 mt-2">4.932 Jiwa</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-black">Keluarga</h4>
          <p class="text-gray-700 mt-2">1.369 KK</p>
        </div>
      </div>

      <!-- Kelembagaan -->
      <h3 class="text-xl font-semibold text-center mt-12 mb-6">Kelembagaan</h3>
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-black">Struktur Desa</h4>
          <p class="text-gray-700 mt-2 text-sm">Aparatur: 17</p>
          <p class="text-gray-700 text-sm">BPD: 9</p>
          <p class="text-gray-700 text-sm">Kadus: 5</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-black">Rukun Warga</h4>
          <p class="text-gray-700 mt-2 text-sm">RW: 7</p>
          <p class="text-gray-700 text-sm">RT: 17</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-black">Organisasi</h4>
          <p class="text-gray-700 mt-2 text-sm">Linmas: 10</p>
          <p class="text-gray-700 text-sm">TP-PKK: 18</p>
        </div>
      </div>

      <!-- Pendidikan -->
      <h3 class="text-xl font-semibold text-center mt-12 mb-6">
        Sarana Pendidikan
      </h3>
      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-black">Dasar</h4>
          <p class="text-gray-700 mt-2 text-sm">Madrasah: 2</p>
          <p class="text-gray-700 text-sm">PAUD: 4</p>
          <p class="text-gray-700 text-sm">TK: -</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-black">Sekolah</h4>
          <p class="text-gray-700 mt-2 text-sm">SD: 2</p>
          <p class="text-gray-700 text-sm">SMP: -</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-black">Lanjutan</h4>
          <p class="text-gray-700 mt-2 text-sm">SMA: -</p>
        </div>
      </div>

      <!-- Kesehatan -->
      <h3 class="text-xl font-semibold text-center mt-12 mb-6">
        Sarana Kesehatan
      </h3>
      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center">
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-black">Polindes</h4>
          <p class="text-gray-700 mt-2">1 Buah</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-black">Posyandu</h4>
          <p class="text-gray-700 mt-2">8 Buah</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import hero2 from "~/assets/images/hero2.png";
import avatar from "~/assets/images/avatar-12.png";
import Toto from "~/assets/images/pak-toto.png";
import Iha from "~/assets/images/iha.jpeg";
import Salim from "~/assets/images/salim.jpeg";
import Asep from "~/assets/images/asep.jpeg";
import Muhidin from "~/assets/images/muhidin.png";
import Ahmadi from "~/assets/images/ahmadi.png";
import Zaenal from "~/assets/images/zaenal.png";
import Hoerul from "~/assets/images/pak-hoerul.png";
import Kades from "~/assets/images/ibu-kades.png";
import Sekdes from "~/assets/images/sekdes.png";

useHead({
  title: "Profil Desa | Desa Pangarengan",
  meta: [
    {
      name: "description",
      content: "Informasi profil Desa Pangarengan, Legonkulon, Subang.",
    },
  ],
});
</script>
