<template>
  <section>
    <!-- Hero Section -->
    <section class="w-full h-[500px] relative">
      <Swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :loop="true"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        navigation
        class="w-full h-full overflow-hidden"
      >
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <img
            :src="slide"
            class="w-full h-full object-cover brightness-50"
            alt="Hero Slide"
          />
          <h1>Hello World</h1>
        </SwiperSlide>
      </Swiper>
    </section>

    <section class="container mx-auto px-6 pt-32">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Video YouTube -->
        <div class="w-full">
          <iframe
            class="w-full aspect-video rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/zX1vjBuqsP4"
            title="Sambutan Desa Pangarengan"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <!-- Konten Sambutan -->
        <div>
          <h2 class="text-3xl font-bold mb-4">Tentang Desa Pangarengan</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Desa Pangarengan adalah salah satu desa yang berada di Kabupaten
            Cirebon. Desa ini memiliki potensi besar di bidang pertanian,
            perikanan, dan UMKM yang berkembang pesat. Selain itu, masyarakat
            Desa Pangarengan dikenal sangat menjunjung tinggi nilai gotong
            royong dan kebersamaan.
          </p>
          <p class="text-gray-700 leading-relaxed mb-6">
            Dengan dukungan pemerintah desa serta partisipasi aktif warga,
            Pangarengan terus berbenah menuju desa mandiri dan modern yang tetap
            menjaga kearifan lokal dan budaya setempat.
          </p>
          <NuxtLink
            to="/profil-desa"
            class="text-black underline font-semibold hover:underline"
          >
            Selengkapnya
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Potensi Desa -->
    <div class="mt-20 container mx-auto">
      <h2 class="text-2xl font-bold text-center mb-10">
        Potensi Desa Pangarengan
      </h2>
      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div class="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">Pertanian</h3>
          <img :src="pertanian" alt="" class="rounded-xl mb-2" />
          <p class="text-gray-600">
            Desa Pangarengan memiliki lahan pertanian subur dengan hasil utama
            berupa padi, jagung, dan sayur-sayuran.
          </p>
        </div>
        <div class="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">Perikanan</h3>
          <img :src="perikanan" alt="" class="rounded-xl mb-2" />
          <p class="text-gray-600">
            Terdapat kolam dan tambak yang dimanfaatkan masyarakat untuk usaha
            budidaya ikan air tawar.
          </p>
        </div>
        <div class="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">Budaya & Gotong Royong</h3>
          <img :src="hero1" alt="" class="rounded-xl mb-2" />
          <p class="text-gray-600">
            Kegiatan adat, kesenian, dan semangat gotong royong menjadi ciri
            khas masyarakat Desa Pangarengan.
          </p>
        </div>
      </div>
    </div>

    <!-- Blog Terbaru -->
    <div class="mt-20 container mx-auto">
      <h2 class="text-2xl font-bold text-center mb-10">Kegiatan Terbaru</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <NuxtLink
          to="/blog/santunan-anak-yatim"
          class="block bg-white shadow p-6 rounded-xl hover:shadow-lg transition"
        >
          <h3 class="text-lg font-semibold mb-2">Santunan Anak Yatim</h3>
          <img
            :src="santunan"
            alt=""
            class="rounded-xl mb-2 w-[500px] object-cover h-[200px]"
          />
          <p class="text-gray-600">
            Kegiatan rutin Desa Pangarengan dalam rangka mempererat silaturahmi
            dan kepedulian sosial.
          </p>
        </NuxtLink>

        <NuxtLink
          to="/blog/kunjungan-mi"
          class="block bg-white shadow p-6 rounded-xl hover:shadow-lg transition"
        >
          <h3 class="text-lg font-semibold mb-2">
            Kunjungan ke Madrasah Ibtidaiyah
          </h3>
          <img
            :src="kunjunganMi"
            alt=""
            class="rounded-xl mb-2 w-[500px] object-cover h-[200px]"
          />
          <p class="text-gray-600">
            Pemerintah desa bersama perangkat melakukan kunjungan ke MI setempat
            untuk mendukung pendidikan.
          </p>
        </NuxtLink>

        <NuxtLink
          to="/blog/pembagian-beras"
          class="block bg-white shadow p-6 rounded-xl hover:shadow-lg transition"
        >
          <h3 class="text-lg font-semibold mb-2">
            Pembagian Beras untuk Masyarakat
          </h3>
          <img
            :src="beras"
            alt=""
            class="rounded-xl mb-2 w-[500px] object-cover h-[200px]"
          />
          <p class="text-gray-600">
            Sebagai bentuk kepedulian, desa menyalurkan bantuan beras kepada
            masyarakat yang membutuhkan.
          </p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import gambar dari assets
import hero1 from '~/assets/images/hero1.jpg';
import hero2 from '~/assets/images/hero2.png';
import hero3 from '~/assets/images/hero3.png';
import pertanian from '~/assets/images/pertanian.png';
import perikanan from '~/assets/images/perikanan.png';
import santunan from '~/assets/images/santunan.jpg';
import kunjunganMi from '~/assets/images/kunjungan-mi.jpg';
import beras from '~/assets/images/beras.jpeg';

const slides = [hero1, hero2, hero3];
</script>
