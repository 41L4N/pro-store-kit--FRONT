<template>
  <header class="encabezado">
    <div class="contenedor">
      <div class="logo">
        <div class="logo-icon">
          <i class="pi pi-shopping-bag"></i>
        </div>
        Pro<span>Store</span>
      </div>

      <div class="acciones">
        <Button icon="pi pi-heart" text rounded aria-label="Favoritos" />
        <Button icon="pi pi-shopping-cart" text rounded aria-label="Carrito" badge="3" />
        <Button label="Entrar" icon="pi pi-sign-in" size="small" @click="() => {}" />
      </div>
    </div>
  </header>
</template>

<script setup>
import Button from 'primevue/button'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&display=swap');

.encabezado {
  background: white;
  border-bottom: 0.5px solid #e5e7eb;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: 'Outfit', sans-serif;
}

.contenedor {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 64px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 600;
  color: #1a1a2e;
}

.logo span { color: #6366f1; }

.logo-icon {
  width: 34px; height: 34px;
  background: #6366f1;
  border-radius: 9px;
  display: flex; align-items: center; justify-content: center;
  color: white;
  font-size: 18px;
}

.acciones {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>