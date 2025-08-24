<template>
  <section>
    <!-- Hero -->
    <div class="bg-black text-white text-center py-16 shadow-lg">
      <h1 class="text-4xl font-extrabold mb-4">Kegiatan Desa Pangarengan</h1>
      <p class="text-lg max-w-2xl mx-auto">
        Dokumentasi dan informasi kegiatan yang dilaksanakan oleh Desa
        Pangarengan.
      </p>
    </div>

    <!-- Daftar Blog -->
    <div class="grid md:grid-cols-3 gap-8 mt-16 container mx-auto">
      <NuxtLink
        v-for="post in posts"
        :key="post.slug"
        :to="`/blog/${post.slug}`"
        class="block bg-white shadow p-6 rounded-xl hover:shadow-lg transition"
      >
        <img
          :src="post.image"
          :alt="post.title"
          class="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
        <p class="text-gray-600">{{ post.excerpt }}</p>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import santunan from '~/assets/images/santunan.jpg';
import kunjunganMi from '~/assets/images/kunjungan-mi.jpg';
import beras from '~/assets/images/beras.jpeg';
import kantorDesa from '~/assets/images/kantor-desa.png';
const posts = [
  {
    slug: 'santunan-anak-yatim',
    title: 'Santunan Anak Yatim',
    excerpt:
      'Kegiatan rutin Desa Pangarengan dalam rangka mempererat silaturahmi dan kepedulian sosial.',
    image: `${santunan}?text=Santunan+Anak+Yatim`,
  },
  {
    slug: 'kunjungan-mi',
    title: 'Kunjungan ke Madrasah Ibtidaiyah',
    excerpt:
      'Pemerintah desa bersama perangkat melakukan kunjungan ke MI setempat untuk mendukung pendidikan.',
    image: `${kunjunganMi}?text=Kunjungan+MI`,
  },
  {
    slug: 'pembagian-beras',
    title: 'Pembagian Beras untuk Masyarakat',
    excerpt:
      'Sebagai bentuk kepedulian, desa menyalurkan bantuan beras kepada masyarakat yang membutuhkan.',
    image: `${beras}?text=Pembagian+Beras`,
  },
  {
    slug: 'santunan-anak-yatim',
    title: 'Santunan Anak Yatim',
    excerpt:
      'Kegiatan rutin Desa Pangarengan dalam rangka mempererat silaturahmi dan kepedulian sosial.',
    image: `${santunan}?text=Santunan+Anak+Yatim`,
  },
  {
    slug: 'kunjungan-mi',
    title: 'Kunjungan ke Madrasah Ibtidaiyah',
    excerpt:
      'Pemerintah desa bersama perangkat melakukan kunjungan ke MI setempat untuk mendukung pendidikan.',
    image: `${kunjunganMi}?text=Kunjungan+MI`,
  },
  {
    slug: 'pembagian-beras',
    title: 'Pembagian Beras untuk Masyarakat',
    excerpt:
      'Sebagai bentuk kepedulian, desa menyalurkan bantuan beras kepada masyarakat yang membutuhkan.',
    image: `${beras}?text=Pembagian+Beras`,
  },
];
</script>
