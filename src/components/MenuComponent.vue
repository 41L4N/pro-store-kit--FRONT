<template>
  <nav class="navegacion-principal">
    <div class="logo">
      <div class="logo-icon">
        <i class="ti ti-shopping-bag"></i>
      </div>
      Pro<span>Store</span>
    </div>

    <ul class="lista-menu">
      <li>
        <router-link to="/"><i class="ti ti-home"></i> Inicio</router-link>
      </li>
      <li>
        <router-link to="/tienda"><i class="ti ti-shopping-bag"></i> Tienda</router-link>
      </li>
      <li>
        <router-link to="/ofertas"><i class="ti ti-tag"></i> Ofertas</router-link>
      </li>
      <li>
        <router-link to="/contacto"><i class="ti ti-mail"></i> Contacto</router-link>
      </li>
    </ul>

    <div class="acciones">
      <div class="btn-carrito">
        <i class="ti ti-shopping-cart"></i>
        <span class="badge">3</span>
      </div>
      <Button label="Entrar" icon="pi pi-sign-in" size="small" @click="() => {}" />
      <div class="avatar">JD</div>
    </div>
  </nav>
</template>

<script setup>
import Button from 'primevue/button'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&display=swap');
@import url('https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css');

.navegacion-principal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 64px;
  background: white;
  border-bottom: 0.5px solid #e5e7eb;
  font-family: 'Outfit', sans-serif;
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
  width: 32px; height: 32px;
  background: #6366f1;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: white;
  font-size: 18px;
}

.lista-menu {
  display: flex;
  align-items: center;
  gap: 2px;
  list-style: none;
  padding: 0; margin: 0;
}

.lista-menu a {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 7px 14px;
  border-radius: 8px;
  color: #6b7280;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  border: 0.5px solid transparent;
}

.lista-menu a:hover {
  background: #f3f4f6;
  color: #1a1a2e;
  border-color: #e5e7eb;
}

.lista-menu a.router-link-active {
  background: #eef2ff;
  color: #6366f1;
  border-color: #c7d2fe;
}

.acciones {
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-carrito {
  position: relative;
  width: 36px; height: 36px;
  border-radius: 8px;
  border: 0.5px solid #e5e7eb;
  display: flex; align-items: center; justify-content: center;
  color: #6b7280;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s;
}

.btn-carrito:hover { background: #f3f4f6; color: #1a1a2e; }

.badge {
  position: absolute;
  top: -4px; right: -4px;
  background: #6366f1;
  color: white;
  font-size: 10px;
  font-weight: 600;
  width: 16px; height: 16px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}

.avatar {
  width: 34px; height: 34px;
  border-radius: 50%;
  background: #eef2ff;
  border: 0.5px solid #c7d2fe;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px;
  font-weight: 600;
  color: #6366f1;
  cursor: pointer;
}
</style>