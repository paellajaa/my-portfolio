<template>
  <section id="about" class="py-16 sm:py-24 lg:py-32 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="reveal mb-10 sm:mb-16">
        <span class="font-mono text-win-teal text-sm tracking-widest uppercase">// About</span>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-mono font-extrabold text-white mt-2 uppercase tracking-tight">
          System_<span class="text-win-teal">Information</span>
        </h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <!-- Main Bio Window -->
        <div class="lg:col-span-2 reveal">
          <div class="win-aero animate-float float-delay-1">
            <div class="win-title-bar h-8 flex items-center px-3 gap-2">
              <div class="w-3 h-3 bg-win-silver/30 rounded-full"></div>
              <span class="font-mono text-white text-xs font-bold">User_Bio.txt — Notepad</span>
            </div>
            <div class="flex gap-4 px-3 py-1 border-b border-white/5 text-[11px] font-mono text-win-silver/40">
              <span>File</span><span>Edit</span><span>Search</span><span>Help</span>
            </div>
            <div class="p-5 sm:p-6 md:p-8 space-y-4">
              <p class="text-base sm:text-lg md:text-xl text-win-silver leading-relaxed">
                Halo, saya <span class="text-win-teal font-bold">Raffa'el Aditya</span> — seorang Full-Stack Web Developer dan Creative Designer yang berbasis di Tangerang, Indonesia. Lulusan jurusan Rekayasa Perangkat Lunak (RPL) dari SMK Negeri 4 Tangerang.
              </p>
              <p class="text-base sm:text-lg text-win-silver/70 leading-relaxed">
                Saya memiliki pengalaman nyata di dunia industri melalui program magang sebagai <span class="text-win-teal/90">Creative Team</span> di <span class="text-white/80">Gading Propertindo Indonesia</span>, di mana saya memproduksi aset visual, konten promosi, dan mengelola branding digital perusahaan.
              </p>
              <p class="text-base sm:text-lg text-win-silver/70 leading-relaxed">
                Di sisi teknis, saya fokus membangun aplikasi web menggunakan <span class="text-win-teal/90">Laravel</span> dan <span class="text-win-teal/90">Vue.js</span>, mulai dari sistem perpustakaan digital (BIBLIOX), aplikasi keuangan pribadi (Di Catet), hingga website properti mewah (Vantage Point). Saya juga mendalami video editing untuk proyek-proyek dokumentasi kreatif.
              </p>
              <p class="text-base sm:text-lg text-win-silver/70 leading-relaxed">
                Saya percaya bahwa teknologi dan kreativitas harus berjalan berdampingan. Oleh karena itu, saya selalu mengeksplorasi tools terbaru — dari Tailwind CSS, Figma, hingga AI Generative — untuk menghasilkan solusi digital yang tidak hanya fungsional, tetapi juga estetis dan berkesan.
              </p>
              <div class="mt-6 pt-4 border-t border-white/5 flex flex-col gap-2 text-xs font-mono text-win-silver/30">
                <span>Pendidikan: SMK Negeri 4 Tangerang (Rekayasa Perangkat Lunak, 2023 - 2026)</span>
                <span>Magang: Creative Team — Gading Propertindo Indonesia</span>
                <span>Fokus: Full-Stack Development • Creative Design • Video Editing</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Stats Cards – horizontal on mobile, vertical on lg -->
        <div class="grid grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-6">
          <div class="reveal">
            <div class="win-aero p-4 sm:p-6 text-center animate-float float-delay-2 hover:border-win-teal/30 transition-colors">
              <span class="text-3xl sm:text-5xl font-mono font-extrabold text-win-teal text-glow">4+</span>
              <div class="mt-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-win-silver/50 border-t border-white/5 pt-2 sm:pt-3">
                Completed Projects
              </div>
            </div>
          </div>
          <div class="reveal">
            <div class="win-aero p-4 sm:p-6 text-center animate-float float-delay-3 hover:border-win-teal/30 transition-colors">
              <span class="text-3xl sm:text-5xl font-mono font-extrabold text-white">3</span>
              <div class="mt-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-win-silver/50 border-t border-white/5 pt-2 sm:pt-3">
                Years Experience
              </div>
            </div>
          </div>
          <div class="reveal">
            <div class="win-aero p-4 sm:p-6 text-center animate-float float-delay-4 hover:border-win-teal/30 transition-colors">
              <span class="text-3xl sm:text-5xl font-mono font-extrabold text-neo-green">99%</span>
              <div class="mt-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-win-silver/50 border-t border-white/5 pt-2 sm:pt-3">
                Uptime Reliability
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
</script>
