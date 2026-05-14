<template>
  <section id="home" class="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
      <!-- Left: Text -->
      <div class="space-y-5 z-10 text-center lg:text-left">
        <div class="reveal inline-block win-aero-light px-4 py-2 font-mono text-xs sm:text-sm text-win-teal">
          Hello World, I'm <span class="wave text-lg">👋🏼</span>
        </div>
        <h1 class="reveal text-hero font-mono font-extrabold text-white uppercase leading-[0.9]">
          Raffa'el<br><span class="text-win-teal text-glow">Aditya</span>
        </h1>
        <div class="reveal win-aero px-4 py-2 sm:px-5 sm:py-3 inline-block font-mono text-sm sm:text-base text-neo-green max-w-full overflow-hidden">
          C:\&gt; <span>{{ typedText }}</span><span class="typewrite-cursor"></span>
        </div>
        <p class="reveal text-win-silver/70 text-base sm:text-lg max-w-md leading-relaxed mx-auto lg:mx-0">
          Full-Stack Developer yang gemar membangun aplikasi web interaktif dengan desain antarmuka eksperimental.
        </p>
        <div class="reveal flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
          <a href="#about" class="btn-primary text-sm">View_Profile.exe</a>
          <a href="#contact" class="btn-aero text-sm">Contact_Me</a>
        </div>
      </div>
      <!-- Right: Avatar -->
      <div class="flex justify-center lg:justify-end z-10">
        <div class="reveal-scale relative">
          <div class="animate-float win-aero p-1 relative group" style="animation-delay:-2s">
            <div class="win-title-bar h-7 flex items-center px-2 gap-2">
              <span class="font-mono text-white text-[11px] font-bold">USER_AVATAR.BMP</span>
              <div class="ml-auto flex gap-1">
                <div class="w-4 h-4 win-beveled bg-win-silver/20"></div>
                <div class="w-4 h-4 win-beveled bg-win-silver/20"></div>
              </div>
            </div>
            <div class="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 overflow-hidden">
              <img alt="Raffa'el Aditya" src="/img/pp3.jpeg"
                class="w-full h-full object-cover grayscale-[30%] contrast-110 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700" />
            </div>
          </div>
          <!-- Decorative floating elements – hidden on xs -->
          <div class="hidden sm:block absolute -top-6 -left-6 w-16 h-16 border-2 border-win-teal/30 animate-float-slow" style="animation-delay:-1s"></div>
          <div class="hidden sm:block absolute -bottom-4 -right-4 w-10 h-10 bg-win-teal/20 animate-float-fast rotate-45" style="animation-delay:-3s"></div>
        </div>
      </div>
    </div>
    <!-- Background decoration -->
    <div class="absolute top-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-win-teal/5 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-win-teal/3 rounded-full blur-[80px] pointer-events-none"></div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const typedText = ref('')
const toRotate = ['Web Developer', 'Full-Stack Engineer', 'Creative Coder', 'UI/UX Designer']
let loopNum = 0, isDeleting = false, timer = null

function tick() {
  const i = loopNum % toRotate.length
  const full = toRotate[i]
  typedText.value = isDeleting ? full.substring(0, typedText.value.length - 1) : full.substring(0, typedText.value.length + 1)
  let delta = 120 - Math.random() * 50
  if (isDeleting) delta /= 2
  if (!isDeleting && typedText.value === full) { delta = 2000; isDeleting = true }
  else if (isDeleting && typedText.value === '') { isDeleting = false; loopNum++; delta = 500 }
  timer = setTimeout(tick, delta)
}
onMounted(() => tick())
onUnmounted(() => clearTimeout(timer))
</script>
