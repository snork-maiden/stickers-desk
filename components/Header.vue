<template>
  <header class="header">
    <!-- Logo with link to home -->
    <nuxt-link to="/" class="logo-link">
      лого
    </nuxt-link>

    <!-- Settings icon with link to settings page -->
    <nuxt-link to="/settings" class="settings-link">
      настройки
    </nuxt-link>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
}


</style>
