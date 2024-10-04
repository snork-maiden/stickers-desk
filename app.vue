<template>
  <div class="main-wrapper">
    <Header />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style scoped lang="scss">
.main-wrapper {
  width: Min(90vw, 1300px);
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
