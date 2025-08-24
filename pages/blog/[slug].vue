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
        class="w-full h-72 object-cover rounded-xl mb-6"
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

import kunjunganMi from '~/assets/images/kunjungan-mi.jpg';

const route = useRoute();

const posts = {
  'santunan-anak-yatim': {
    title: 'Santunan Anak Yatim',
    date: '12 Agustus 2025',
    image: 'https://via.placeholder.com/800x400?text=Santunan+Anak+Yatim',
    content: [
      'Kegiatan santunan anak yatim merupakan agenda rutin Desa Pangarengan yang dilaksanakan setiap tahun.',
      'Tujuan kegiatan ini adalah untuk mempererat silaturahmi dan meningkatkan rasa kepedulian sosial terhadap anak-anak yatim di desa.',
      'Acara dihadiri oleh perangkat desa, tokoh masyarakat, dan warga desa.',
    ],
  },
  'kunjungan-mi': {
    title: 'Kunjungan ke Madrasah Ibtidaiyah',
    date: '20 Juli 2025',
    image: `${kunjunganMi}?text=Kunjungan+MI`,
    content: [
      'Pemerintah Desa Pangarengan melakukan kunjungan ke Madrasah Ibtidaiyah setempat.',
      'Kunjungan ini bertujuan memberikan dukungan moral dan bantuan sarana pendidikan.',
      'Kegiatan ini mendapat sambutan hangat dari pihak sekolah dan orang tua murid.',
    ],
  },
  'pembagian-beras': {
    title: 'Pembagian Beras untuk Masyarakat',
    date: '5 Juni 2025',
    image: 'https://via.placeholder.com/800x400?text=Pembagian+Beras',
    content: [
      'Pemerintah Desa Pangarengan menyalurkan bantuan berupa beras kepada masyarakat kurang mampu.',
      'Program ini merupakan wujud kepedulian desa terhadap kesejahteraan masyarakat.',
      'Sebanyak 150 paket beras dibagikan langsung kepada warga di balai desa.',
    ],
  },
};

// Ambil post berdasarkan slug
const post = posts[route.params.slug];
</script>
