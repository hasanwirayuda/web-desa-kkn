<template>
  <section>
    <!-- Hero -->
    <div class="bg-black text-white text-center py-16 shadow-lg">
      <h1 class="text-4xl font-extrabold mb-4">Kontak Desa Pangarengan</h1>
      <p class="text-lg max-w-2xl mx-auto">
        Hubungi kami melalui alamat, email, atau formulir berikut. Kami siap
        melayani masyarakat Desa Pangarengan.
      </p>
    </div>

    <!-- Info Kontak -->
    <div class="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto text-center">
      <div class="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
        <h3 class="text-xl font-bold text-black mb-2">Alamat</h3>
        <p class="text-gray-700">
          Desa Pangarengan, Kec. Legonkulon, Kab. Subang, Jawa Barat
        </p>
      </div>
      <div class="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
        <h3 class="text-xl font-bold text-black mb-2">Email</h3>
        <p class="text-gray-700">desapangarengan@mail.com</p>
      </div>
      <div class="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
        <h3 class="text-xl font-bold text-black mb-2">Telepon</h3>
        <p class="text-gray-700">+62 812 3456 7890</p>
      </div>
    </div>

    <!-- Form Kontak -->
    <div class="mt-20 max-w-3xl mx-auto">
      <h2 class="text-2xl font-bold text-center mb-6">Kirim Pesan</h2>
      <form class="bg-white shadow p-8 rounded-xl space-y-4">
        <input
          type="text"
          placeholder="Nama"
          class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />
        <textarea
          rows="5"
          placeholder="Pesan"
          class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        ></textarea>
        <button
          type="submit"
          class="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition"
        >
          Kirim
        </button>
      </form>
    </div>

    <!-- Google Maps -->
    <div class="mt-20 mb-16 max-w-5xl mx-auto">
      <h2 class="text-2xl font-bold text-center mb-6">
        Lokasi Desa Pangarengan
      </h2>
      <div class="rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.517617248775!2d107.77874547499193!3d-6.455946763455728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6935dc1b46db0f%3A0x938f23c7e8c8b29e!2sPangarengan%2C%20Legonkulon%2C%20Kabupaten%20Subang%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1692111188495!5m2!1sid!2sid"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>
