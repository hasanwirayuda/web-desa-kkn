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
            “Terwujudnya Desa Pangarengan yang maju, mandiri, dan sejahtera
            dengan semangat gotong royong dan kearifan lokal.”
          </p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-3 text-green-700">Misi</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>Meningkatkan pelayanan publik yang cepat dan transparan.</li>
            <li>Mendorong pertumbuhan ekonomi berbasis potensi desa.</li>
            <li>Melestarikan budaya dan memperkuat nilai gotong royong.</li>
            <li>Mengembangkan pendidikan dan kesehatan masyarakat.</li>
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
            :src="avatar"
            alt="Kepala Desa"
            class="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Ibu Atifah Noorlaela.S.IP</h3>
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
      </div>

      <!-- Kasie / Kaur -->
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12"
      >
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="avatar"
            alt="Kasie Pemerintahan"
            class="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Asep Susanto</h3>
          <p class="text-gray-600">Kasie Pemerintahan</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="avatar"
            alt="Kasie Kesejahteraan"
            class="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Haerul Anwar</h3>
          <p class="text-gray-600">Kasie Kesejahteraan</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="avatar"
            alt="Kasie Tata Usaha & Umum"
            class="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Salim Syarifudin</h3>
          <p class="text-gray-600">Kasie Tata Usaha & Umum</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="avatar"
            alt="Kaur Keuangan"
            class="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Sumarno</h3>
          <p class="text-gray-600">Kaur Keuangan</p>
        </div>
      </div>

      <!-- Kasun -->
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto"
      >
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="avatar"
            alt="Kasun 1"
            class="w-20 h-20 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Zaenal Abidin</h3>
          <p class="text-gray-600">Kasun 1</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="avatar"
            alt="Kasun 2"
            class="w-20 h-20 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Iha Muhayati</h3>
          <p class="text-gray-600">Kasun 2</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="avatar"
            alt="Kasun 3"
            class="w-20 h-20 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Muhidin</h3>
          <p class="text-gray-600">Kasun 3</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="avatar"
            alt="Kasun 4"
            class="w-20 h-20 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Ahmadi</h3>
          <p class="text-gray-600">Kasun 4</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="avatar"
            alt="Kasun 5"
            class="w-20 h-20 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">Toto</h3>
          <p class="text-gray-600">Kasun 5</p>
        </div>
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
</script>
