<script lang="ts" setup>
const { isStickers } = storeToRefs(useStickerStore());
</script>

<template>
  <main class="container">
    <div class="card" v-if="!isStickers">
      <p>
        Перейдите в
        <NuxtLink to="/settings" class="link">настройки</NuxtLink>, чтобы
        добавить первую карточку
      </p>
    </div>
    <Cards v-else />
  </main>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  max-width: 90vw;
  margin: 0 auto;
}
</style>
