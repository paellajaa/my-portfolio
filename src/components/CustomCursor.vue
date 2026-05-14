<template>
  <div>
    <div ref="cursorDot" class="cursor-dot"></div>
    <div ref="cursorRing" class="cursor-ring"></div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const cursorDot = ref(null)
const cursorRing = ref(null)
let hovering = false

function onMouseMove(e) {
  gsap.to(cursorDot.value, { x: e.clientX - 6, y: e.clientY - 6, duration: 0.15, ease: 'power2.out' })
  gsap.to(cursorRing.value, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.4, ease: 'power2.out' })
}

function onEnterInteractive() {
  if (hovering) return
  hovering = true
  cursorDot.value?.classList.add('active')
  cursorRing.value?.classList.add('active')
}

function onLeaveInteractive() {
  hovering = false
  cursorDot.value?.classList.remove('active')
  cursorRing.value?.classList.remove('active')
}

function setupHoverListeners() {
  document.querySelectorAll('a, button, [data-hover], input, textarea, .project-card').forEach(el => {
    el.addEventListener('mouseenter', onEnterInteractive)
    el.addEventListener('mouseleave', onLeaveInteractive)
  })
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  setupHoverListeners()
  // Re-scan for new elements periodically
  const observer = new MutationObserver(() => setTimeout(setupHoverListeners, 100))
  observer.observe(document.body, { childList: true, subtree: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
})
</script>
