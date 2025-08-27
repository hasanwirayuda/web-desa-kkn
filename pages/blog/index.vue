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
import senam from '~/assets/images/senam.jpg';
import jumantik from '~/assets/images/jumantik.webp';
import bendera from '~/assets/images/bendera.webp';
const posts = [
  {
    slug: 'pemasangan-bendera-17-agustus',
    title: 'Pemasangan Bendera 17 Agustus',
    excerpt:
      'Menjelang Hari Kemerdekaan Republik Indonesia, warga Desa Pangarengan bergotong royong memasang bendera Merah Putih.',
    image: `${bendera}?text=Pemasangan+Bendera+17+Agustus`,
  },
  {
    slug: 'jumantik-cegah-dbd-di-pangarengan',
    title: 'Jumantik Cegah DBD di Pangarengan',
    excerpt:
      'Bergotong royong memeriksa dan membersihkan tempat-tempat yang berpotensi menjadi sarang nyamuk.',
    image: `${jumantik}?text=Jumantik+Cegah+DBD+di+Pangarengan`,
  },
  {
    slug: 'pembagian-beras',
    title: 'Pembagian Beras untuk Masyarakat',
    excerpt:
      'Sebagai bentuk kepedulian, desa menyalurkan bantuan beras kepada masyarakat yang membutuhkan.',
    image: `${beras}?text=Pembagian+Beras`,
  },
  {
    slug: 'kunjungan-mi',
    title: 'Kunjungan ke Madrasah Ibtidaiyah',
    excerpt:
      'Pemerintah desa bersama perangkat melakukan kunjungan ke MI setempat untuk mendukung pendidikan.',
    image: `${kunjunganMi}?text=Kunjungan+MI`,
  },
  {
    slug: 'santunan-anak-yatim',
    title: 'Santunan Anak Yatim',
    excerpt:
      'Kegiatan rutin Desa Pangarengan dalam rangka mempererat silaturahmi dan kepedulian sosial.',
    image: `${santunan}?text=Santunan+Anak+Yatim`,
  },
  {
    slug: 'serunya-senam-sore-bareng-ibu-ibu-pangarengan',
    title: 'Serunya Senam Sore Bareng Ibu-Ibu Pangarengan',
    excerpt:
      'Sore yang cerah di Desa Pangarengan semakin meriah dengan kegiatan senam bersama ibu-ibu',
    image: `${senam}?text=Serunya+Senam+Sore+Bareng+Ibu-Ibu+Pangarengan`,
  },
];

useHead({
  title: 'Blog Desa Pangarengan',
  meta: [
    {
      name: 'description',
      content: 'Artikel, berita, dan kegiatan terbaru Desa Pangarengan.',
    },
  ],
});
</script>
