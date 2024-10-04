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

<script lang="ts" setup>
const { isStickers } = storeToRefs(useStickerStore());
useHead({
  title: "Мои стикеры",
});
</script>

<style scoped lang="scss">
.container {
  margin-top: clamp(1.5em, 7vw, 4em);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
