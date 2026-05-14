<template>
  <section id="contact" class="py-16 sm:py-24 lg:py-32 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="reveal mb-10 sm:mb-16 text-center">
        <span class="font-mono text-win-teal text-sm tracking-widest uppercase">// Contact</span>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-mono font-extrabold text-white mt-2 uppercase tracking-tight">
          Hubungi_<span class="text-win-teal">Saya</span>
        </h2>
        <p class="text-win-silver/50 mt-4 text-sm sm:text-base">Tinggalkan komentar atau sapa saya melalui sosial media di bawah.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Guestbook / Comment Window -->
        <div class="reveal">
          <div class="win-aero animate-float float-delay-1">
            <div class="win-title-bar h-8 flex items-center px-3 gap-2">
              <div class="w-3 h-3 bg-win-silver/30 rounded-full"></div>
              <span class="font-mono text-white text-xs font-bold">Guestbook.exe — {{ comments.length }} entries</span>
              <div class="ml-auto flex gap-1">
                <div class="w-3 h-3 win-beveled bg-win-silver/20"></div>
                <div class="w-3 h-3 win-beveled bg-win-silver/20"></div>
              </div>
            </div>
            <!-- Comment Form -->
            <div class="p-4 sm:p-5 border-b border-white/5 space-y-3">
              <div class="flex gap-2 sm:gap-3 items-center">
                <span class="font-mono text-xs text-win-silver/40 w-12 shrink-0">Name:</span>
                <input v-model="commentName" type="text" placeholder="Nama kamu"
                  class="flex-1 bg-white/5 border border-white/10 px-3 py-2 font-mono text-sm text-win-silver placeholder:text-win-silver/20 focus:border-win-teal/50 focus:outline-none transition-colors" />
              </div>
              <textarea v-model="commentText" rows="3" placeholder="Tulis komentar..."
                class="w-full bg-white/5 border border-white/10 px-3 py-2 font-mono text-sm text-win-silver placeholder:text-win-silver/20 focus:border-win-teal/50 focus:outline-none transition-colors resize-none"></textarea>
              <div class="flex justify-between items-center">
                <span v-if="submitStatus" class="font-mono text-xs text-neo-green">{{ submitStatus }}</span>
                <span v-else class="font-mono text-xs text-win-silver/20">// max 200 karakter</span>
                <button @click="postComment" class="btn-primary text-xs" data-hover>⟫ Post</button>
              </div>
            </div>
            <!-- Comment List -->
            <div class="max-h-64 overflow-y-auto hide-scrollbar">
              <div v-if="comments.length === 0" class="p-6 text-center">
                <p class="font-mono text-xs text-win-silver/30">// Belum ada komentar. Jadilah yang pertama!</p>
              </div>
              <div v-for="(c, i) in comments" :key="i"
                class="px-4 sm:px-5 py-3 border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="font-mono text-xs font-bold text-win-teal">{{ c.name }}</span>
                  <span class="font-mono text-[10px] text-win-silver/20">{{ c.time }}</span>
                </div>
                <p class="font-mono text-xs text-win-silver/60 leading-relaxed">{{ c.text }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Social Links -->
        <div class="space-y-4">
          <div v-for="(link, i) in socialLinks" :key="link.name" class="reveal">
            <a :href="link.url" target="_blank" data-hover
              class="win-aero p-4 flex items-center gap-4 hover:border-win-teal/30 transition-all group animate-float"
              :style="{animationDelay: -(i * 1.2) + 's'}">
              <div class="w-10 h-10 bg-win-teal/10 flex items-center justify-center font-mono text-win-teal text-lg group-hover:bg-win-teal/20 transition-colors" v-html="link.icon">
              </div>
              <div>
                <h4 class="font-mono font-bold text-white text-sm group-hover:text-win-teal transition-colors">{{ link.name }}</h4>
                <p class="font-mono text-xs text-win-silver/40">{{ link.handle }}</p>
              </div>
              <span class="ml-auto text-win-silver/20 group-hover:text-win-teal transition-colors">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const commentName = ref('')
const commentText = ref('')
const comments = ref([])
const submitStatus = ref('')

const STORAGE_KEY = 'portfolio_guestbook'

function loadComments() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (data) comments.value = JSON.parse(data)
  } catch { comments.value = [] }
}

function saveComments() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(comments.value))
}

function postComment() {
  const name = commentName.value.trim()
  const text = commentText.value.trim()
  if (!name || !text) {
    submitStatus.value = '⚠ Isi nama dan komentar!'
    setTimeout(() => { submitStatus.value = '' }, 2000)
    return
  }
  if (text.length > 200) {
    submitStatus.value = '⚠ Maksimal 200 karakter!'
    setTimeout(() => { submitStatus.value = '' }, 2000)
    return
  }

  const now = new Date()
  const time = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) + ' ' +
    now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })

  comments.value.unshift({ name, text, time })
  saveComments()
  commentName.value = ''
  commentText.value = ''
  submitStatus.value = '✓ Komentar terkirim!'
  setTimeout(() => { submitStatus.value = '' }, 2000)
}

onMounted(() => { loadComments() })

const socialLinks = [
  { name: 'GitHub', handle: 'github.com/paellajaa', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>', url: 'https://github.com/paellajaa' },
  { name: 'Instagram', handle: '@rffell_20', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>', url: 'https://instagram.com/rffell_20' },
  { name: 'LinkedIn', handle: 'Raffael Aditya', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>', url: 'https://www.linkedin.com/in/raffael-aditya/' },
  { name: 'Email', handle: 'raffaeladitya354@gmail.com', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>', url: 'mailto:raffaeladitya354@gmail.com' },
]
</script>
