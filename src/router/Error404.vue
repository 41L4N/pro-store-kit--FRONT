<template>
  <div class="error-layout">
    <div class="error-content">
      <div class="error-header">
        <i class="pi pi-exclamation-circle error-icon"></i>
      </div>
      
      <h1 class="error-code">404</h1>
      
      <h2 class="error-title">Página No Encontrada</h2>
      
      <p class="error-description">
        Lo sentimos, la página que buscas no existe. El enlace puede estar roto o la página puede haber sido eliminada.
      </p>
      
      <div class="error-actions">
        <Button 
          label="Volver al Inicio" 
          icon="pi pi-arrow-left"
          @click="goHome"
          class="p-button-lg"
        />
        
        <Button 
          label="Contactar Soporte" 
          icon="pi pi-envelope"
          severity="secondary"
          @click="contactSupport"
          class="p-button-lg p-button-outlined"
        />
      </div>
      
      <div class="error-footer">
        <p class="footer-text">¿Necesitas ayuda? <a href="#" class="footer-link">Visita nuestro centro de ayuda</a></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Button from 'primevue/button'

const router = useRouter()

const goHome = () => {
  router.push('/')
}

const contactSupport = () => {
  console.log('Contactando soporte...')
}
</script>

<style scoped>
.error-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

.error-content {
  background: white;
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 600px;
  width: 100%;
  animation: slideUp 0.5s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.error-header {
  margin-bottom: 2rem;
}

.error-icon {
  font-size: 4rem;
  color: #667eea;
  display: inline-block;
}

.error-code {
  font-size: 5rem;
  font-weight: 700;
  margin: 0.5rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 2px;
}

.error-title {
  font-size: 1.75rem;
  color: #333;
  margin: 1rem 0;
  font-weight: 600;
}

.error-description {
  font-size: 1rem;
  color: #666;
  margin: 1.5rem 0 2.5rem 0;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
  flex-wrap: wrap;
}

.error-actions :deep(.p-button) {
  flex: 1;
  min-width: 200px;
}

@media (max-width: 600px) {
  .error-content {
    padding: 2rem 1.5rem;
  }

  .error-code {
    font-size: 3.5rem;
  }

  .error-title {
    font-size: 1.5rem;
  }

  .error-actions {
    flex-direction: column;
  }

  .error-actions :deep(.p-button) {
    width: 100%;
  }
}

.error-footer {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e9ecef;
}

.footer-text {
  font-size: 0.875rem;
  color: #666;
  margin: 0;
}

.footer-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #764ba2;
  text-decoration: underline;
}
</style>