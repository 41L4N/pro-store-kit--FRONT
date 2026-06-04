<template>
  <div class="home-container p-d-flex p-flex-column p-ai-center p-jc-center">
    <div class="home-content p-text-center">
      <h1 class="home-title">
        <i class="pi pi-shopping-bag home-icon"></i>
        ¡Bienvenido a Pro Store Kit!
      </h1>
      
      <p class="home-subtitle">
        Tu plataforma de e-commerce moderna y profesional
      </p>
      
      <div class="home-features p-mt-4">
        <div class="feature-card">
          <i class="pi pi-shopping-cart feature-icon"></i>
          <h3>Catálogo Completo</h3>
          <p>Explora nuestros productos</p>
        </div>
        
        <div class="feature-card">
          <i class="pi pi-truck feature-icon"></i>
          <h3>Envíos Rápidos</h3>
          <p>Entrega en tu puerta</p>
        </div>
        
        <div class="feature-card">
          <i class="pi pi-shield feature-icon"></i>
          <h3>Compra Segura</h3>
          <p>Protección garantizada</p>
        </div>
      </div>
      
      <div class="home-actions p-mt-5">
        <Button 
          label="Explorar Productos" 
          icon="pi pi-arrow-right"
          @click="goToShop"
          class="p-button-lg p-button-rounded"
        />
        
        <Button 
          label="Ver Más" 
          icon="pi pi-info-circle"
          severity="secondary"
          @click="showInfo"
          class="p-button-lg p-button-rounded p-button-outlined"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToShop = () => {
  console.log('Ir a la tienda')
  // router.push('/shop') - agregar cuando tengas la ruta
}

const showInfo = () => {
  console.log('Mostrar información')
  // Aquí puedes agregar la lógica que desees
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

.home-content {
  max-width: 1000px;
  width: 100%;
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.home-title {
  font-size: 3rem;
  color: white;
  font-weight: 700;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.home-icon {
  font-size: 3.5rem;
  color: #ffd700;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.home-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 1rem 0 2rem 0;
}

.home-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  font-size: 2.5rem;
  color: #667eea;
  margin-bottom: 1rem;
  display: block;
}

.feature-card h3 {
  color: #333;
  font-size: 1.3rem;
  margin: 1rem 0 0.5rem 0;
  font-weight: 600;
}

.feature-card p {
  color: #666;
  font-size: 0.95rem;
  margin: 0;
}

.home-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.home-actions :deep(.p-button) {
  padding: 0.75rem 2rem;
  font-weight: 600;
  font-size: 1rem;
}

.home-actions :deep(.p-button-rounded) {
  border-radius: 50px;
}

.home-actions :deep(.p-button:first-child) {
  min-width: 250px;
}

@media (max-width: 768px) {
  .home-title {
    font-size: 2rem;
  }

  .home-icon {
    font-size: 2.5rem;
  }

  .home-subtitle {
    font-size: 1.1rem;
  }

  .home-features {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .home-actions {
    flex-direction: column;
  }

  .home-actions :deep(.p-button:first-child) {
    width: 100%;
    min-width: unset;
  }
}
</style>