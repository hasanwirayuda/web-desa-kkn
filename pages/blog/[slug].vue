<template>
  <section v-if="post">
    <!-- Header Blog -->
    <div class="bg-black text-white text-center py-16 shadow-lg">
      <h1 class="text-4xl font-extrabold mb-4">{{ post.title }}</h1>
      <p class="text-lg">{{ post.date }}</p>
    </div>

    <!-- Konten Blog -->
    <div
      class="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow leading-relaxed text-gray-700"
    >
      <img
        :src="post.image"
        :alt="post.title"
        class="w-full h-96 object-cover rounded-xl mb-6"
      />
      <p v-for="(paragraph, index) in post.content" :key="index" class="mb-4">
        {{ paragraph }}
      </p>
    </div>

    <!-- Tombol Kembali -->
    <div class="text-center mt-10">
      <NuxtLink
        to="/blog"
        class="inline-block bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition"
      >
        ← Kembali ke Blog
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router';

import santunan from '~/assets/images/santunan.jpg';
import kunjunganMi from '~/assets/images/kunjungan-mi.jpg';
import beras from '~/assets/images/beras.jpeg';
import senam from '~/assets/images/senam.jpg';
import jumantik from '~/assets/images/jumantik.webp';
import bendera from '~/assets/images/bendera.webp';

const route = useRoute();

const posts = {
  'serunya-senam-sore-bareng-ibu-ibu-pangarengan': {
    title: 'Serunya Senam Sore Bareng Ibu-Ibu Pangarengan',
    date: '19 Juli 2025',
    image: `${senam}`,
    content: [
      'Sore yang cerah di Desa Pangarengan semakin meriah dengan kegiatan senam bersama ibu-ibu. Gerakan sederhana namun penuh energi ini bukan hanya membuat badan lebih bugar, tapi juga mempererat silaturahmi antarwarga. Dengan iringan musik yang ceria, tawa dan semangat terpancar dari setiap peserta. Kegiatan ini menjadi salah satu momen rutin yang selalu dinantikan, sekaligus ajang untuk menjaga kesehatan dan kebersamaan.',
    ],
  },
  'santunan-anak-yatim': {
    title: 'Santunan Anak Yatim',
    date: '12 Agustus 2025',
    image: `${santunan}`,
    content: [
      'Suasana hangat penuh rasa syukur terasa di Kantor Desa Pangarengan saat warga berkumpul untuk memberikan santunan kepada anak-anak yatim. Kegiatan ini diisi dengan doa bersama, penyerahan bantuan, dan momen kebersamaan yang mengharukan. Melalui santunan ini, diharapkan dapat meringankan beban dan memberikan semangat bagi mereka yang membutuhkan. Kebersamaan warga dalam acara ini menjadi bukti nyata semangat gotong royong dan kepedulian yang tinggi di Desa Pangarengan.',
    ],
  },
  'kunjungan-mi': {
    title: 'Kunjungan ke Madrasah Ibtidaiyah',
    date: '20 Juli 2025',
    image: `${kunjunganMi}`,
    content: [
      'Kegiatan kunjungan ke Madrasah Ibtidaiyah (MI) Pangarengan berlangsung penuh semangat dan keceriaan. Warga desa bersama perangkat desa mendatangi sekolah untuk bersilaturahmi dengan para guru dan siswa. Acara diisi dengan sesi belajar bersama, permainan edukatif, serta pemberian motivasi untuk terus giat belajar. Selain mempererat hubungan antara masyarakat dan sekolah, kegiatan ini juga menjadi momen berbagi inspirasi demi kemajuan pendidikan anak-anak di Desa Pangarengan.',
    ],
  },
  'pembagian-beras': {
    title: 'Pembagian Beras untuk Masyarakat',
    date: '1 Agustus 2025',
    image: `${beras}`,
    content: [
      'Balai Desa Pangarengan dipenuhi suasana hangat saat perangkat desa menyalurkan bantuan beras kepada warga. Kegiatan ini bertujuan membantu meringankan kebutuhan pokok masyarakat, terutama bagi mereka yang membutuhkan. Proses pembagian berlangsung tertib, dengan senyum dan ucapan terima kasih yang tulus dari para penerima. Aksi sederhana ini menjadi wujud nyata kepedulian dan kebersamaan warga Pangarengan dalam saling mendukung di masa sulit.',
    ],
  },
  'jumantik-cegah-dbd-di-pangarengan': {
    title: 'Jumantik Cegah DBD di Pangarengan',
    date: '2 Agustus 2025',
    image: `${jumantik}`,
    content: [
      'Warga Desa Pangarengan bersama petugas Jumantik (Juru Pemantau Jentik) bergotong royong memeriksa dan membersihkan tempat-tempat yang berpotensi menjadi sarang nyamuk penyebab Demam Berdarah Dengue (DBD). Kegiatan ini meliputi pengecekan bak penampungan air, pembersihan selokan, serta edukasi kepada masyarakat tentang pentingnya menjaga kebersihan lingkungan. Semangat kebersamaan dan kepedulian terlihat jelas, sebagai langkah nyata menjaga kesehatan bersama.',
    ],
  },
  'pemasangan-bendera-17-agustus': {
    title: 'Pemasangan Bendera 17 Agustus',
    date: '2 Agustus 2025',
    image: `${bendera}`,
    content: [
      'Menjelang Hari Kemerdekaan Republik Indonesia, warga Desa Pangarengan bergotong royong memasang bendera Merah Putih di depan rumah dan sepanjang jalan desa. Kegiatan ini tidak hanya sebagai bentuk penghormatan kepada para pahlawan, tetapi juga untuk memeriahkan suasana peringatan 17 Agustus. Warna merah putih yang berkibar di setiap sudut desa menciptakan pemandangan indah penuh semangat nasionalisme. Kebersamaan dan antusiasme warga menjadi bukti cinta tanah air yang tak pernah pudar.',
    ],
  },
};

// Ambil post berdasarkan slug
const post = posts[route.params.slug];
</script>
