<template>
  <div>
    <section id="portfolio" class="py-16 sm:py-24 lg:py-32 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="reveal mb-8 sm:mb-12 text-center">
          <span class="font-mono text-win-teal text-sm tracking-widest uppercase">// Portfolio</span>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-mono font-extrabold text-white mt-2 uppercase tracking-tight">
            Portfolio_<span class="text-win-teal">Showcase</span>
          </h2>
          <p class="text-win-silver/50 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Explore my journey through projects, certifications, and technical expertise.
          </p>
        </div>

        <!-- Tabs -->
        <div class="reveal flex justify-center mb-8 sm:mb-10">
          <div class="win-aero inline-flex flex-wrap justify-center p-1 gap-1">
            <button v-for="tab in tabs" :key="tab.id" @click="switchTab(tab.id)" data-hover
              class="px-3 sm:px-6 py-2 sm:py-3 font-mono text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 border border-transparent"
              :class="activeTab === tab.id ? 'tab-active' : 'text-win-silver/50 hover:text-white hover:bg-white/5'">
              <span class="mr-1 sm:mr-2">{{ tab.icon }}</span>{{ tab.label }}
            </button>
          </div>
        </div>

        <!-- Projects Tab -->
        <div v-if="activeTab === 'projects'">
          <div class="flex justify-center gap-2 mb-8">
            <button v-for="cat in categories" :key="cat" @click="activeCategory = cat" data-hover
              class="px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 border"
              :class="activeCategory === cat ? 'border-win-teal bg-win-teal/15 text-win-teal' : 'border-white/10 text-win-silver/40 hover:text-white hover:border-white/20'">
              {{ cat }}
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(p, i) in filteredProjects" :key="p.name" class="project-card win-aero overflow-hidden group animate-float" :style="{ animationDelay: -(i * 0.4) + 's' }">
              <div class="win-title-bar h-7 flex items-center px-2">
                <span class="font-mono text-white text-[10px]">{{ p.name }}.exe</span>
                <div class="ml-auto flex gap-1">
                  <div class="w-3 h-3 win-beveled bg-win-silver/20"></div>
                  <div class="w-3 h-3 win-beveled bg-win-silver/20"></div>
                </div>
              </div>
              <div class="relative aspect-video overflow-hidden">
                <img :src="p.image" :alt="p.name" class="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                <div class="card-overlay absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent flex flex-col justify-end p-4">
                  <div class="flex gap-2">
                    <a :href="p.link" target="_blank" class="btn-primary text-xs py-2 px-4">↗ View App</a>
                    <button @click.stop="openModal(p)" class="btn-aero text-xs py-2 px-4">Details →</button>
                  </div>
                </div>
              </div>
              <div class="p-4">
                <h3 class="font-mono font-bold text-white text-base mb-1">{{ p.name }}</h3>
                <p class="text-win-silver/50 text-sm leading-relaxed line-clamp-2 mb-3">{{ p.desc }}</p>
                <div class="flex flex-wrap gap-1.5">
                  <span v-for="t in p.tech" :key="t" class="text-[10px] font-mono text-win-teal/80 bg-win-teal/10 px-2 py-0.5 border border-win-teal/20">
                    {{ t }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tech Stack Tab -->
        <div v-if="activeTab === 'techstack'" ref="techGridRef">
          <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
            <div v-for="(tech, i) in techStack" :key="tech.name"
              class="tech-tile win-aero backdrop-blur-md bg-white/[0.07] p-3 sm:p-5 flex flex-col items-center gap-2 sm:gap-3 transition-all duration-300 group animate-float cursor-pointer relative"
              :style="{ animationDelay: -(i * 0.4) + 's' }"
              style="box-shadow: inset 2px 2px 0px rgba(192,192,192,0.2), inset -2px -2px 0px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.3);"
              data-hover>
              <div class="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img :src="tech.icon" :alt="tech.name" class="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-[0_0_8px_rgba(0,128,128,0.3)] group-hover:drop-shadow-[0_0_16px_rgba(0,128,128,0.5)] transition-all duration-300" />
              </div>
              <span class="font-mono text-[11px] text-win-silver/60 text-center group-hover:text-win-teal transition-colors duration-300 tracking-wider uppercase">
                {{ tech.name }}
              </span>
              <div class="absolute inset-0 border-2 border-transparent group-hover:border-win-teal/30 transition-colors duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>

        <!-- Certificates Tab -->
        <div v-if="activeTab === 'certificates'" class="text-center py-16">
          <div class="win-aero inline-block p-8 animate-float">
            <div class="text-4xl mb-4">📜</div>
            <p class="font-mono text-win-silver/50 text-sm">Certificates will be displayed here</p>
            <p class="font-mono text-win-teal/40 text-xs mt-2">// Coming soon</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Detail Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="selectedProject" class="fixed inset-0 z-[300] flex items-center justify-center p-4" @click.self="closeModal">
          <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="closeModal"></div>
          <div class="win-aero relative w-full max-w-lg mx-auto z-10">
            <div class="win-title-bar h-8 flex items-center justify-between px-3">
              <span class="font-mono text-white text-xs font-bold">{{ selectedProject.name }}_Details.txt</span>
              <button @click="closeModal" class="w-5 h-5 win-beveled bg-win-silver/20 text-white text-xs flex items-center justify-center hover:bg-red-500/50 transition-colors">×</button>
            </div>
            <div class="flex gap-4 px-3 py-1 border-b border-white/5 text-[11px] font-mono text-win-silver/40">
              <span>File</span><span>Edit</span><span>View</span><span>Help</span>
            </div>
            <div class="p-5 sm:p-6 space-y-5 max-h-[80vh] overflow-y-auto">
              <div class="aspect-video overflow-hidden border border-white/10">
                <img :src="selectedProject.image" :alt="selectedProject.name" class="w-full h-full object-cover" />
              </div>
              <div>
                <h3 class="font-mono font-extrabold text-white text-xl uppercase tracking-tight">{{ selectedProject.name }}</h3>
                <p class="font-mono text-win-teal text-xs mt-1">{{ selectedProject.category }}</p>
              </div>
              <p class="text-win-silver/70 text-sm leading-relaxed">{{ selectedProject.fullDesc }}</p>
              <div>
                <p class="font-mono text-[10px] uppercase tracking-widest text-win-silver/30 mb-2">// Tech Stack</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="t in selectedProject.tech" :key="t" class="text-[10px] font-mono text-win-teal/80 bg-win-teal/10 px-2 py-1 border border-win-teal/20">{{ t }}</span>
                </div>
              </div>
              <div class="flex gap-3 pt-2 border-t border-white/5">
                <a :href="selectedProject.link" target="_blank" class="btn-primary text-xs flex-1 text-center py-2">↗ Open GitHub</a>
                <button @click="closeModal" class="btn-aero text-xs flex-1 py-2">✕ Close</button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, watch } from 'vue'
import gsap from 'gsap'

const tabs = [
  { id: 'projects', label: 'Projects', icon: '◇' },
  { id: 'certificates', label: 'Certificates', icon: '◈' },
  { id: 'techstack', label: 'Tech Stack', icon: '⚙' },
]
const activeTab = ref('projects')
const categories = ['All', 'Web App', 'Video Editing']
const activeCategory = ref('All')
const techGridRef = ref(null)

// DevIcon CDN base URL
const devIconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const techStack = [
  { name: 'HTML5',            icon: `${devIconBase}/html5/html5-original.svg` },
  { name: 'CSS3',             icon: `${devIconBase}/css3/css3-original.svg` },
  { name: 'JavaScript',       icon: `${devIconBase}/javascript/javascript-original.svg` },
  { name: 'TypeScript',       icon: `${devIconBase}/typescript/typescript-original.svg` },
  { name: 'PHP',              icon: `${devIconBase}/php/php-original.svg` },
  { name: 'Laravel',          icon: `${devIconBase}/laravel/laravel-original.svg` },
  { name: 'Vue.js',           icon: `${devIconBase}/vuejs/vuejs-original.svg` },
  { name: 'ReactJS',          icon: `${devIconBase}/react/react-original.svg` },
  { name: 'Node.js',          icon: `${devIconBase}/nodejs/nodejs-original.svg` },
  { name: 'MySQL',            icon: `${devIconBase}/mysql/mysql-original.svg` },
  { name: 'MongoDB',          icon: `${devIconBase}/mongodb/mongodb-original.svg` },
  { name: 'Tailwind CSS',     icon: `${devIconBase}/tailwindcss/tailwindcss-original.svg` },
  { name: 'Bootstrap 5',      icon: `${devIconBase}/bootstrap/bootstrap-original.svg` },
  { name: 'Git',              icon: `${devIconBase}/git/git-original.svg` },
  { name: 'GitHub',           icon: `${devIconBase}/github/github-original.svg` },
  { name: 'Vite',             icon: `${devIconBase}/vitejs/vitejs-original.svg` },
  { name: 'Vercel',           icon: `${devIconBase}/vercel/vercel-original.svg` },
  { name: 'Postman',          icon: `${devIconBase}/postman/postman-original.svg` },
  { name: 'Docker',           icon: `${devIconBase}/docker/docker-original.svg` },
  { name: 'Figma',            icon: `${devIconBase}/figma/figma-original.svg` },
  { name: 'Canva',            icon: `${devIconBase}/canva/canva-original.svg` },
  { name: 'Photoshop',        icon: `${devIconBase}/photoshop/photoshop-original.svg` },
  { name: 'Illustrator',      icon: `${devIconBase}/illustrator/illustrator-original.svg` },
  { name: 'VS Code',          icon: `${devIconBase}/vscode/vscode-original.svg` },
]

const projects = [
  {
    name: 'BIBLIOX',
    category: 'Web App',
    image: '/img/bibliox.png',
    desc: 'Digital Library System. Platform perpustakaan digital masa kini dengan antarmuka yang bersih untuk membaca buku tanpa batas secara eksklusif.',
    fullDesc: 'BIBLIOX adalah sistem informasi perpustakaan digital yang dikembangkan secara mandiri menggunakan framework Laravel dan Tailwind CSS. Proyek ini mencakup fitur autentikasi pengguna, manajemen koleksi buku digital, sistem peminjaman dengan batas waktu, dan pencarian buku yang canggih. Basis data MySQL dirancang untuk mengelola data peminjaman, anggota, dan koleksi secara sistematis dan efisien.',
    tech: ['Laravel', 'Tailwind CSS', 'MySQL'],
    link: 'https://github.com/paellajaa/bibliox'
  },
  {
    name: 'Di Catet',
    category: 'Web App',
    image: '/img/dicatet.png',
    desc: 'Aplikasi pencatatan pemasukan & pengeluaran harian yang simpel, cepat, dan elegan. Dilengkapi dengan dashboard kategori dan laporan visual.',
    fullDesc: 'Di Catet adalah aplikasi manajemen keuangan pribadi yang dibangun dengan Vue.js dan Tailwind CSS. Fitur utamanya mencakup pencatatan pemasukan dan pengeluaran harian secara real-time, pengelompokan transaksi ke dalam 5 kategori (Makanan, Transportasi, Hiburan, Gaji, Investasi), laporan visual berbasis grafik, serta tampilan saldo yang selalu ter-update. Aplikasi ini dirancang dengan UI yang bersih, responsif, dan cepat tanpa loading berlebihan.',
    tech: ['Vue.js', 'Tailwind CSS'],
    link: 'https://github.com/paellajaa/di-catet-app'
  },
  {
    name: 'Vantage Point',
    category: 'Web App',
    image: '/img/vantage.png',
    desc: 'Website showcase properti mewah (Luxury Living) bergaya elegan eksklusif. Menampilkan interaksi UI/UX kelas atas dan desain responsif.',
    fullDesc: 'Vantage Point adalah website showcase properti mewah berkonsep Luxury Living yang dibangun dengan fokus penuh pada estetika dan pengalaman pengguna premium. Menampilkan galeri properti eksklusif, animasi scroll yang halus, navigasi elegan, serta layout responsif yang tampil sempurna di semua perangkat. Proyek ini menekankan keahlian dalam UI/UX design dan implementasi frontend berkualitas tinggi.',
    tech: ['Frontend', 'UI/UX', 'Animations'],
    link: 'https://github.com/paellajaa/vantage-point'
  },
  {
    name: 'Wedding Ditto & Rizka',
    category: 'Video Editing',
    image: '/img/wedding-ditto.png',
    desc: 'Video dokumentasi pernikahan Ditto & Rizka dengan teknik sinematik dan color grading yang hangat.',
    fullDesc: 'Proyek video editing dokumentasi pernikahan Ditto & Rizka. Menggunakan teknik penceritaan visual yang sinematik dengan transisi halus, color grading bernuansa warm vintage, serta sinkronisasi musik latar yang emosional. Video ini menangkap momen-momen spesial dengan komposisi yang dinamis dan editing yang profesional untuk menghasilkan kenangan yang tak terlupakan.',
    tech: ['CapCut', 'Video Editing', 'Color Grading'],
    link: 'https://drive.google.com/file/d/1kVEnLXspDei_QuMU8-lUupGkgBatUV73/view?usp=sharing'
  },
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects
  return projects.filter(p => p.category === activeCategory.value)
})

// GSAP stagger animation when switching to tech stack tab
function switchTab(tabId) {
  activeTab.value = tabId
  if (tabId === 'techstack') {
    nextTick(() => {
      const tiles = techGridRef.value?.querySelectorAll('.tech-tile')
      if (tiles && tiles.length > 0) {
        gsap.fromTo(tiles,
          { opacity: 0, y: 30, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: 'back.out(1.4)',
            clearProps: 'transform',
          }
        )
      }
    })
  }
}

// Modal logic
const selectedProject = ref(null)
function openModal(project) { selectedProject.value = project }
function closeModal() { selectedProject.value = null }
</script>

<style scoped>
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-active .win-aero, .modal-leave-active .win-aero {
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease;
}
.modal-enter-from, .modal-leave-to {
  opacity: 0;
}
.modal-enter-from .win-aero {
  transform: scale(0.92) translateY(20px);
}
</style>
