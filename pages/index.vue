<script lang="ts" setup>
const { isStickers } = storeToRefs(useStickerStore());
</script>

<template>
  <main class="container">
    <p class="card" v-if="!isStickers">
      Перейдите в
      <NuxtLink to="/settings" class="link">настройки</NuxtLink>, чтобы добавить
      первую карточку
    </p>
    <CardsDisplay v-else />
  </main>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
</style>
