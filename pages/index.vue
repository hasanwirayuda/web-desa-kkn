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
        </SwiperSlide>
      </Swiper>
    </section>

    <section class="container mx-auto px-6 pt-32">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Video YouTube -->
        <div class="w-full">
          <iframe
            class="w-full aspect-video rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/WA5-80j8VNw"
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
            Pangarengan adalah desa di kecamatan Legon Kulon, Subang, Jawa
            Barat, Indonesia. Desa Pangarengan yang terletak di Pesisir pantai
            Laut jawa ini mempunyai Luas Wilayah 1.883,7 Ha, Dengan Luas
            Pesawahan 396.70 Ha, Hutan 1.087 Ha, Perkebunan 2, 50 Ha, dan Luas
            Perkantoran 0, 80 Ha dengan Jumlah Penduduk 4.932 Jiwa dengan 17 RT
            7 RW Dan 5 Dusun yakni; Krajan, Pelabuhan, Pelabuhan Sebrang, Kalen
            Balongan, dan Pancer Wetan.
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
          <img
            :src="pertanian"
            alt=""
            class="rounded-xl mb-2 w-full object-cover h-[200px] my-4"
          />
          <p class="text-gray-600 mt-4">
            Desa Pangarengan memiliki lahan pertanian subur dengan hasil utama
            berupa padi, jagung, dan sayur-sayuran. Potensi ini mendukung
            ketahanan pangan sekaligus menjadi sumber penghasilan utama
            masyarakat.
          </p>
        </div>
        <div class="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">Tambak & Empang</h3>
          <img
            :src="perikanan"
            alt=""
            class="rounded-xl mb-2 w-full object-cover h-[200px] my-4"
          />
          <p class="text-gray-600 mt-4">
            Terdapat kolam dan tambak yang dimanfaatkan masyarakat untuk usaha
            budidaya ikan air tawar. Potensi ini menjadi salah satu penopang
            ekonomi sekaligus mendukung kebutuhan protein masyarakat.
          </p>
        </div>
        <div class="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">Pantai Cirewang</h3>
          <img
            :src="pantaiCirewang"
            alt=""
            class="rounded-xl mb-2 w-full object-cover h-[200px] my-4"
          />
          <p class="text-gray-600 mt-4">
            Pantai Cirewang merupakan destinasi wisata alam unggulan dengan
            keindahan pantai, hutan mangrove, dan suasana asri yang menjadi daya
            tarik utama bagi wisatawan lokal maupun mancanegara.
          </p>
        </div>
        <div class="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">Pantai Boom</h3>
          <img
            :src="pantaiBoom"
            alt=""
            class="rounded-xl mb-2 w-full object-cover h-[200px] my-4"
          />
          <p class="text-gray-600 mt-4">
            Pantai Boom merupakan salah satu destinasi wisata bahari unggulan
            yang dimiliki Desa Pangarengan. Pantai ini menawarkan pemandangan
            laut yang indah dengan hamparan pasir yang luas.
          </p>
        </div>
        <div class="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">Area Nelayan & Hasil Laut</h3>
          <img
            :src="PemukimanNelayan"
            alt=""
            class="rounded-xl mb-2 w-full object-cover h-[200px] my-4"
          />
          <p class="text-gray-600 mt-4">
            Dengan kekayaan hasil laut dan semangat gotong royong masyarakat
            nelayan, Desa Pangarengan memiliki potensi besar untuk mengembangkan
            sektor perikanan sekaligus membuka peluang usaha kuliner berbasis
            olahan hasil laut.
          </p>
        </div>
        <div class="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">Peternakan Ayam</h3>
          <img
            :src="PeternakanAyam"
            alt=""
            class="rounded-xl mb-2 w-full object-cover h-[200px] my-4"
          />
          <p class="text-gray-600 mt-4">
            Peternakan ayam di desa ini menghasilkan berbagai produk, mulai dari
            daging ayam segar hingga telur yang memiliki nilai jual tinggi.
            Selain mendukung ketahanan pangan lokal, sektor ini juga membuka
            peluang usaha bagi masyarakat.
          </p>
        </div>
        <div class="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">Pelelangan Ikan</h3>
          <img
            :src="Pelelangan"
            alt=""
            class="rounded-xl mb-2 w-full object-cover h-[200px] my-4"
          />
          <p class="text-gray-600 mt-4">
            Pelelangan ikan di Desa Pangarengan menjadi salah satu pusat
            aktivitas ekonomi masyarakat pesisir. Setiap harinya, hasil
            tangkapan nelayan seperti ikan, udang, dan hasil laut lainnya
            dikumpulkan untuk dilelang.
          </p>
        </div>
        <div class="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">Tambak Garam</h3>
          <img
            :src="TambakGaram"
            alt=""
            class="rounded-xl mb-2 w-full object-cover h-[200px] my-4"
          />
          <p class="text-gray-600 mt-4">
            Desa Pangarengan juga memiliki potensi unggulan di sektor tambak
            garam. Berlokasi di kawasan pesisir yang strategis, lahan tambak
            dimanfaatkan oleh masyarakat untuk memproduksi garam secara
            tradisional dengan memanfaatkan panas matahari.
          </p>
        </div>
        <div class="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">Produk Olahan Rumahan</h3>
          <img
            :src="Keripik"
            alt=""
            class="rounded-xl mb-2 w-full object-cover h-[200px] my-4"
          />
          <p class="text-gray-600 mt-4">
            Desa Pangarengan juga dikenal dengan beragam produk olahan rumahan
            yang dibuat secara kreatif oleh masyarakat. Produk ini meliputi
            makanan ringan, hasil olahan laut, hingga aneka kudapan tradisional.
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
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import gambar dari assets
import hero1 from '~/assets/images/hero1.jpg';
import hero2 from '~/assets/images/hero2.png';
import hero3 from '~/assets/images/hero3.png';
import hero4 from '~/assets/images/hero-4.png';
import pertanian from '~/assets/images/pertanian.png';
import perikanan from '~/assets/images/tambak.jpeg';
import santunan from '~/assets/images/santunan.jpg';
import kunjunganMi from '~/assets/images/kunjungan-mi.jpg';
import beras from '~/assets/images/beras.jpeg';
import pantaiCirewang from '~/assets/images/pantai-cirewang.jpg';
import pantaiBoom from '~/assets/images/pantai-boom.jpeg';
import Pelelangan from '~/assets/images/pelelangan.jpeg';
import TambakGaram from '~/assets/images/pembuatan-garam.jpeg';
import PemukimanNelayan from '~/assets/images/pemukiman-nelayan.jpeg';
import PeternakanAyam from '~/assets/images/peternakan-ayam.jpg';
import Keripik from '~/assets/images/kripik.jpeg';
const slides = [hero4, hero1, hero3, hero2];
</script>
