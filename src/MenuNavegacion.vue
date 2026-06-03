<template>
  <nav class="navegacion-principal">
    <div class="logo">Pro<span>Store</span></div>
    <ul class="lista-menu">
      <li>
        <router-link to="/">
          <i class="ti ti-home"></i> Inicio
        </router-link>
      </li>
      <li>
        <router-link to="/tienda">
          <i class="ti ti-shopping-bag"></i> Tienda
        </router-link>
      </li>
      <li>
        <router-link to="/contacto">
          <i class="ti ti-mail"></i> Contacto
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&display=swap');

.navegacion-principal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 60px;
  background: white;
  border-bottom: 0.5px solid #e5e7eb;
  font-family: 'Outfit', sans-serif;
}

.logo {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a2e;
}

.logo span { color: #6366f1; }

.lista-menu {
  display: flex;
  gap: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.lista-menu a {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 8px;
  color: #6b7280;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s, color 0.2s;
}

.lista-menu a:hover,
.lista-menu a.router-link-active {
  background: #f3f4f6;
  color: #6366f1;
}

@media (max-width: 600px) {
  .lista-menu a span { display: none; }
}
</style>