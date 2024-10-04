<template>
  <main class="not-found-container">
    <div class="not-found-message">Страница не найдена</div>
  </main>
</template>

<script setup>
useHead({
  title: 'Страница не найдена'
})

</script>

<style scoped lang="scss">
.not-found-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.not-found-message {
  position: relative;
  font-size: 3.3rem;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  &::before {
    content: "404";
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: min(40vw, 30rem);
    font-weight: 800;
    color: rgba(65, 157, 160, 0.07);
    z-index: 0;
    pointer-events: none;
    user-select: none;
  }
}
</style>
