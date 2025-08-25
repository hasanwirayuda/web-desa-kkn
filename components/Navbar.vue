<!-- <template>
  <nav class="bg-black text-white p-4 px-10 flex justify-between">
    <h1 class="font-bold text-lg">Desa Pangarengan</h1>
    <ul class="flex gap-6">
      <li><NuxtLink to="/">Beranda</NuxtLink></li>
      <li><NuxtLink to="/profil-desa">Profil Desa</NuxtLink></li>
      <li><NuxtLink to="/blog">Blog</NuxtLink></li>
      <li><NuxtLink to="/kontak">Kontak</NuxtLink></li>
    </ul>
  </nav>
</template> -->
<template>
  <nav class="bg-black text-white p-4 px-6 flex items-center justify-between">
    <!-- Logo -->
    <h1 class="font-bold text-lg">Desa Pangarengan</h1>

    <!-- Desktop Menu -->
    <ul class="hidden md:flex gap-6">
      <li><NuxtLink to="/">Beranda</NuxtLink></li>
      <li><NuxtLink to="/profil-desa">Profil Desa</NuxtLink></li>
      <li><NuxtLink to="/blog">Blog</NuxtLink></li>
      <li><NuxtLink to="/kontak">Kontak</NuxtLink></li>
    </ul>

    <!-- Mobile Toggle Button -->
    <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
      <svg
        v-if="!isOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </nav>

  <!-- Mobile Menu -->
  <transition name="slide-fade">
    <ul
      v-if="isOpen"
      class="md:hidden bg-black text-white flex flex-col gap-4 p-6"
    >
      <li><NuxtLink to="/" @click="isOpen = false">Beranda</NuxtLink></li>
      <li>
        <NuxtLink to="/profil-desa" @click="isOpen = false"
          >Profil Desa</NuxtLink
        >
      </li>
      <li><NuxtLink to="/blog" @click="isOpen = false">Blog</NuxtLink></li>
      <li><NuxtLink to="/kontak" @click="isOpen = false">Kontak</NuxtLink></li>
    </ul>
  </transition>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>

<style scop ed>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
