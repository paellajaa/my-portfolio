<template>
  <div class="dot-grid-bg min-h-screen relative">
    <!-- Custom Cursor -->
    <CustomCursor />


    <!-- Navbar -->
    <NavBar :activeSection="activeSection" :menuOpen="menuOpen" @toggleMenu="menuOpen = !menuOpen" />

    <!-- Marquee Divider -->
    <div class="fixed bottom-0 left-0 right-0 z-[80] win-aero border-x-0 border-b-0">
      <div class="py-1.5 whitespace-nowrap flex overflow-hidden">
        <span class="marquee-scroll font-mono text-[11px] uppercase tracking-[0.3em] text-win-teal/40 px-4 inline-block">
          ★ RAFFA'EL ADITYA — FULL-STACK DEVELOPER — VUE.JS / REACT / LARAVEL / TAILWIND — SYSTEM STATUS: ONLINE — PORTFOLIO v2.0 — {{ currentTime }} —
        </span>
        <span class="marquee-scroll font-mono text-[11px] uppercase tracking-[0.3em] text-win-teal/40 px-4 inline-block" aria-hidden="true">
          ★ RAFFA'EL ADITYA — FULL-STACK DEVELOPER — VUE.JS / REACT / LARAVEL / TAILWIND — SYSTEM STATUS: ONLINE — PORTFOLIO v2.0 — {{ currentTime }} —
        </span>
      </div>
    </div>

    <!-- Page Content -->
    <div ref="scrollContainer">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ExperienceSection />
      <ContactSection />

      <!-- Footer -->
      <footer class="py-8 sm:py-12 border-t border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div class="flex items-center gap-2">
            <div class="w-4 h-4 bg-win-teal rotate-45"></div>
            <span class="font-mono text-[10px] sm:text-xs text-win-silver/40 text-center sm:text-left">© 2026 Raffa'el Aditya. All systems operational.</span>
          </div>
          <div class="flex gap-4 sm:gap-6">
            <a v-for="s in ['Home','About','Portfolio','Contact']" :key="s" :href="'#' + s.toLowerCase()"
              class="font-mono text-[10px] sm:text-xs text-win-silver/30 hover:text-win-teal transition-colors" data-hover>{{ s }}</a>
          </div>
        </div>
      </footer>
      <!-- Extra bottom padding for marquee bar -->
      <div class="h-10"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import CustomCursor from './components/CustomCursor.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'

gsap.registerPlugin(ScrollTrigger)

// State
const scrollContainer = ref(null)
const menuOpen = ref(false)
const activeSection = ref('home')
const currentTime = ref('')

let lenis = null


// Clock
function updateTime() {
  currentTime.value = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
}

// GSAP Scroll Reveals
function initAnimations() {
  // Reveal elements (fade up)
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
      }
    )
  })
  // Reveal left
  gsap.utils.toArray('.reveal-left').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
      }
    )
  })
  // Reveal right
  gsap.utils.toArray('.reveal-right').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
      }
    )
  })
  // Reveal scale
  gsap.utils.toArray('.reveal-scale').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
      }
    )
  })

  // Active section tracking
  const sections = ['home', 'about', 'portfolio', 'experience', 'contact']
  sections.forEach(id => {
    ScrollTrigger.create({
      trigger: '#' + id,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => { activeSection.value = id },
      onEnterBack: () => { activeSection.value = id },
    })
  })
}

// Lenis Smooth Scroll
function initLenis() {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => { lenis.raf(time * 1000) })
  gsap.ticker.lagSmoothing(0)

  // Handle anchor clicks for smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.querySelector(a.getAttribute('href'))
      if (target) lenis.scrollTo(target, { offset: -60 })
      menuOpen.value = false
    })
  })
}

let clockInterval = null

onMounted(() => {
  updateTime()
  clockInterval = setInterval(updateTime, 1000)
  nextTick(() => {
    initLenis()
    // Small delay to let DOM settle
    setTimeout(() => initAnimations(), 200)
  })
})

onUnmounted(() => {
  clearInterval(clockInterval)
  lenis?.destroy()
  ScrollTrigger.getAll().forEach(st => st.kill())
})
</script>

<style src="./style.css"></style>