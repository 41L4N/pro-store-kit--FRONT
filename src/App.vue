<script setup>
import { ref } from 'vue'

const dark = ref(false)

const toggleTheme = (e) => {
  dark.value = !dark.value
  document.documentElement.classList.toggle('dark-mode', dark.value)

  const btn = e.currentTarget
  const ripple = document.createElement('span')
  ripple.className = 'ripple'
  const rect = btn.getBoundingClientRect()
  ripple.style.left = (e.clientX - rect.left - 5) + 'px'
  ripple.style.top = (e.clientY - rect.top - 5) + 'px'
  btn.appendChild(ripple)
  setTimeout(() => ripple.remove(), 600)
}
</script>

<template>
  <div class="wrap" :class="{ dark: dark }">
    <button class="p-btn" @click="toggleTheme">
      <span class="icon-wrap">
        <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.2" stroke-linecap="round">
          <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
        <svg class="icon-moon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2.2" stroke-linecap="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
        </svg>
      </span>
      <span>{{ dark ? 'Modo oscuro' : 'Modo claro' }}</span>
    </button>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&display=swap');

:root {
  --surface: #f0f2f5;
  --btn-bg: #ffffff;
  --btn-text: #1a1a2e;
  --btn-border: rgba(0,0,0,0.08);
  --glow: rgba(99,102,241,0.3);
}

.dark-mode {
  --surface: #0f0f1a;
  --btn-bg: #1e1e30;
  --btn-text: #e2e8f0;
  --btn-border: rgba(255,255,255,0.08);
  --glow: rgba(165,180,252,0.25);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: var(--surface);
  transition: background 0.5s ease;
}

.wrap {
  font-family: 'Outfit', sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.p-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: 999px;
  border: 1px solid var(--btn-border);
  background: var(--btn-bg);
  color: var(--btn-text);
  font-family: 'Outfit', sans-serif;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(.4,0,.2,1);
  outline: none;
  overflow: hidden;
}

.p-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 999px;
  box-shadow: 0 0 0 0 var(--glow);
  transition: box-shadow 0.4s ease;
}

.p-btn:hover::before { box-shadow: 0 0 20px 6px var(--glow); }
.p-btn:hover { transform: translateY(-2px); }
.p-btn:active { transform: scale(0.96); }

.icon-wrap {
  width: 22px; height: 22px;
  position: relative;
  display: flex; align-items: center; justify-content: center;
}

.icon-sun, .icon-moon {
  position: absolute;
  transition: transform 0.5s cubic-bezier(.4,0,.2,1), opacity 0.4s ease;
}

.icon-sun  { opacity: 1; transform: rotate(0deg) scale(1); }
.icon-moon { opacity: 0; transform: rotate(90deg) scale(0.5); }

.dark-mode .icon-sun  { opacity: 0; transform: rotate(-90deg) scale(0.5); }
.dark-mode .icon-moon { opacity: 1; transform: rotate(0deg) scale(1); }

.ripple {
  position: absolute;
  border-radius: 50%;
  background: var(--glow);
  width: 10px; height: 10px;
  transform: scale(0);
  animation: ripple 0.6s ease-out forwards;
  pointer-events: none;
}

@keyframes ripple { to { transform: scale(25); opacity: 0; } }
</style>