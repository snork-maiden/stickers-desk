<template>
  <header class="header">
    <nuxt-link to="/" class="button"> <IconLogo /> </nuxt-link>
    <nuxt-link to="/settings" class="button">
      <IconSettings />
    </nuxt-link>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
}
</style>
