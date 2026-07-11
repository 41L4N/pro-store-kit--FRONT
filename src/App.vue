<script setup lang="ts">
import AppFooter from './components/common/AppFooter.vue'
</script>

<template>
  <div class="layout">
    <router-view />
    <AppFooter />
  </div>
</template>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>