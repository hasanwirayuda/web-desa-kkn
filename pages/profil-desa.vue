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
        <p class="mb-4">
          Desa Pangarengan merupakan salah satu desa yang terletak di Kecamatan
          <i>(isi nama kecamatan)</i>, Kabupaten <i>(isi nama kabupaten)</i>.
          Desa ini berdiri sejak zaman kolonial dan telah berkembang menjadi
          pusat kegiatan masyarakat yang berbasis pertanian, perikanan, serta
          kegiatan budaya.
        </p>
        <p>
          Hingga saat ini, Desa Pangarengan terus berupaya meningkatkan kualitas
          hidup masyarakatnya dengan memanfaatkan potensi sumber daya alam dan
          manusia secara berkelanjutan.
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
    <div class="mt-20">
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
          <h3 class="font-semibold">Bapak [Nama Kepala Desa]</h3>
          <p class="text-gray-600">Kepala Desa</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow text-center">
          <img
            :src="avatar"
            alt="Sekretaris Desa"
            class="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h3 class="font-semibold">[Nama Sekdes]</h3>
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
    </div>

    <!-- Data Demografi -->
    <div class="mt-20 mb-16">
      <h2 class="text-2xl font-bold text-center mb-10">
        Data Demografi Desa Pangarengan
      </h2>
      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
        <div class="bg-white p-6 rounded-xl shadow">
          <h3 class="text-xl font-bold text-black">Jumlah Penduduk</h3>
          <p class="text-gray-700 mt-2 text-lg">± 3.500 Jiwa</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow">
          <h3 class="text-xl font-bold text-black">Luas Wilayah</h3>
          <p class="text-gray-700 mt-2 text-lg">350 Hektar</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow">
          <h3 class="text-xl font-bold text-black">Jumlah RT/RW</h3>
          <p class="text-gray-700 mt-2 text-lg">12 RT / 4 RW</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import hero2 from '~/assets/images/hero2.png';
import avatar from '~/assets/images/avatar-12.png';
</script>
