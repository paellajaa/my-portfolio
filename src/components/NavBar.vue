<template>
  <nav ref="navEl" class="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
    :class="scrolled ? 'win-aero py-2' : 'py-4 bg-transparent'">
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <a href="#home" data-hover class="flex items-center gap-2 group">
        <div class="w-5 h-5 bg-win-teal rotate-45 group-hover:rotate-[135deg] transition-transform duration-500"></div>
        <span class="font-mono font-bold text-sm tracking-widest text-white uppercase">Raffa'el.exe</span>
      </a>
      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-1">
        <a v-for="item in navItems" :key="item.id" :href="'#' + item.id" data-hover
          class="px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-300"
          :class="activeSection === item.id ? 'text-win-teal' : 'text-win-silver/60 hover:text-white'">
          {{ item.label }}
        </a>
      </div>
      <!-- Mobile Menu Button -->
      <button @click="$emit('toggleMenu')" class="md:hidden flex flex-col gap-1.5 p-2" data-hover>
        <span class="w-6 h-0.5 bg-win-silver transition-all" :class="menuOpen ? 'rotate-45 translate-y-2' : ''"></span>
        <span class="w-6 h-0.5 bg-win-silver transition-all" :class="menuOpen ? 'opacity-0' : ''"></span>
        <span class="w-6 h-0.5 bg-win-silver transition-all" :class="menuOpen ? '-rotate-45 -translate-y-2' : ''"></span>
      </button>
    </div>
    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden win-aero mx-4 mt-2 p-4 flex flex-col gap-2">
      <a v-for="item in navItems" :key="item.id" :href="'#' + item.id" @click="$emit('toggleMenu')"
        class="px-4 py-3 font-mono text-sm uppercase tracking-widest transition-colors"
        :class="activeSection === item.id ? 'text-win-teal bg-win-teal/10' : 'text-win-silver/60 hover:text-white'">
        {{ item.label }}
      </a>
    </div>
  </nav>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
defineProps({ activeSection: String, menuOpen: Boolean })
defineEmits(['toggleMenu'])

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
const scrolled = ref(false)
const navEl = ref(null)

function handleScroll() { scrolled.value = window.scrollY > 50 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
