
import { createApp } from 'vue'
import App from './App.vue'
import './styles.css'

// Reveal on scroll
const revealDirective = {
  mounted(el){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ el.classList.add('show'); io.unobserve(el); } })
    }, { threshold: 0.16 })
    el.classList.add('reveal')
    io.observe(el)
  }
}

// Simple tilt effect
const tiltDirective = {
  mounted(el, binding){
    const max = binding?.value?.max ?? 6
    const reset = ()=>{ el.style.transform = 'rotateX(0deg) rotateY(0deg)' }
    el.style.transformStyle = 'preserve-3d'
    el.style.transition = 'transform .15s ease'
    el.addEventListener('mousemove', (e)=>{
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width/2, cy = r.top + r.height/2
      const dx = (e.clientX - cx) / (r.width/2)
      const dy = (e.clientY - cy) / (r.height/2)
      const rx = Math.max(Math.min(-dy * max, max), -max)
      const ry = Math.max(Math.min(dx * max, max), -max)
      el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`
    })
    el.addEventListener('mouseleave', reset)
  }
}

// Magnetic micro-parallax
const magneticDirective = {
  mounted(el, binding){
    const strength = binding?.value?.strength ?? 0.22
    const relax = ()=>{ el.style.transform = 'translate3d(0,0,0)' }
    el.style.willChange = 'transform'
    el.addEventListener('mousemove', (e)=>{
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left - r.width/2) * strength
      const y = (e.clientY - r.top - r.height/2) * strength
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    })
    el.addEventListener('mouseleave', relax)
  }
}

const app = createApp(App)
app.directive('reveal', revealDirective)
app.directive('tilt', tiltDirective)
app.directive('magnetic', magneticDirective)
app.mount('#app')

// Smooth anchor scroll with sticky-header offset
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]')
  if (!a) return
  const id = a.getAttribute('href').slice(1)
  if (!id) return
  const target = document.getElementById(id)
  if (!target) return
  e.preventDefault()
  const header = document.querySelector('.sticky.top-0') // Header container
  const offset = (header?.offsetHeight || 0) + 12
  const rect = target.getBoundingClientRect()
  const y = window.scrollY + rect.top - offset
  window.scrollTo({ top: y, behavior: 'smooth' })
})

