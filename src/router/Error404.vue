<template>
  <div class="error-404-container">
    <div class="error-content">
      <h1 class="error-code">404</h1>
      <h2 class="error-title">Página No Encontrada</h2>
      <p class="error-description">
        Lo sentimos, la página que buscas no existe.
      </p>
      <button class="error-button" @click="goHome">
        Volver al Inicio
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
.error-404-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

.error-content {
  text-align: center;
  color: white;
}

.error-code {
  font-size: 8rem;
  font-weight: 900;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.error-title {
  font-size: 2.5rem;
  margin: 1rem 0;
  font-weight: 700;
}

.error-description {
  font-size: 1.1rem;
  margin: 2rem 0;
  opacity: 0.9;
}

.error-button {
  background: white;
  color: #667eea;
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.error-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .error-code {
    font-size: 5rem;
  }

  .error-title {
    font-size: 1.8rem;
  }

  .error-description {
    font-size: 1rem;
  }
}
</style>