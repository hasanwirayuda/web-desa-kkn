<template>
  <footer class="bg-black text-gray-300 py-8 mt-10">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Logo & Deskripsi -->
      <div class="flex flex-col items-center md:items-start space-y-4">
        <img :src="logoKkn" alt="Logo Kelompok 22" class="w-1/5" />
        <p class="text-sm text-center md:text-left text-gray-300">
          Supported by <br />
          <span class="font-semibold text-white">
            Kelompok 22 KKNM Universitas Subang
          </span>
        </p>
      </div>

      <!-- Navigasi -->
      <div class="flex flex-col items-center space-y-2">
        <h3 class="font-semibold text-white">Navigasi</h3>
        <a href="/" class="hover:text-green-400 transition">Beranda</a>
        <a href="/profil" class="hover:text-green-400 transition"
          >Profil Desa</a
        >
        <a href="/potensi" class="hover:text-green-400 transition"
          >Potensi Desa</a
        >
        <a href="/kontak" class="hover:text-green-400 transition">Kontak</a>
      </div>

      <!-- Sosial Media -->
      <div class="flex flex-col items-center space-y-3">
        <h3 class="font-semibold text-white">Ikuti Kami</h3>
        <div class="flex space-x-4 items-center">
          <a
            href="https://www.instagram.com/kknm_pangarengan/"
            aria-label="Instagram"
            target="_blank"
          >
            <img :src="instagram" alt="Ig icon" class="w-10" />
          </a>
          <a
            href="https://www.tiktok.com/@kknm_pangarengan"
            aria-label="Tiktok"
            target="_blank"
          >
            <img :src="tiktok" alt="Tt Icon" class="w-11" />
          </a>
          <a href="#" aria-label="Youtube" target="_blank">
            <img :src="youtube" alt="Yt Icon" class="w-12" />
          </a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
      © 2025 Desa Pangarengan. All Rights Reserved.
    </div>
  </footer>
</template>

<script setup>
import logoKkn from '~/assets/images/logo-kkn.png';
import instagram from '~/assets/images/instagram.svg';
import tiktok from '~/assets/images/tiktok.svg';
import youtube from '~/assets/images/youtube.svg';
</script>
