<template>
  <section id="experience" class="py-16 sm:py-24 lg:py-32 relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="reveal mb-10 sm:mb-16">
        <span class="font-mono text-win-teal text-sm tracking-widest uppercase">// Experience</span>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-mono font-extrabold text-white mt-2 uppercase tracking-tight">
          Experience_<span class="text-win-teal">Log</span>.dat
        </h2>
      </div>
      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-win-teal/50 via-win-teal/20 to-transparent"></div>
        <!-- Timeline Items -->
        <div v-for="(exp, i) in experience" :key="i"
          class="reveal relative flex items-start gap-6 sm:gap-8 mb-10 sm:mb-12">
          <!-- Dot -->
          <div class="absolute left-4 sm:left-6 w-3 h-3 bg-win-teal rounded-full -translate-x-1/2 mt-4 z-10 shadow-glow-teal"></div>
          <!-- Card -->
          <div class="ml-10 sm:ml-14 w-full win-aero p-4 sm:p-5 hover:border-win-teal/30 transition-all animate-float"
            :style="{animationDelay: -(i * 1.5) + 's'}">
            <div class="flex items-center gap-3 mb-3">
              <span class="font-mono text-xs bg-win-teal/20 text-win-teal px-2 py-1 border border-win-teal/30">{{ exp.year }}</span>
            </div>
            <h3 class="font-mono font-bold text-white text-base sm:text-lg uppercase">{{ exp.role }}</h3>
            <p class="text-win-teal/80 font-mono text-sm mb-3">{{ exp.company }}</p>
            <p class="text-win-silver/50 text-sm leading-relaxed">{{ exp.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const experience = [
  { role: 'Creative Team Intern', company: 'Gading Propertindo Indonesia', year: 'Magang', desc: 'Memproduksi aset visual dan konten promosi menggunakan Canva dan CapCut. Mengoptimalkan efisiensi desain menggunakan alat AI Generative. Menjaga konsistensi branding perusahaan pada berbagai platform digital. Mengelola dokumentasi visual untuk keperluan pemasaran properti.' },
]
</script>
