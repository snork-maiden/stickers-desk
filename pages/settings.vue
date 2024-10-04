<template>
  <main class="container">
    <Breadcrumb />
    <section class="cards">
      <p v-if="!store.isStickers" class="no-cards-warning">
        Добавьте свой первый стикер
      </p>
      <SettingsCards />
    </section>
  </main>
</template>

<script setup lang="ts">
const store = useStickerStore();
</script>

<style scoped lang="scss">
.container {
  padding-top: 2em;
}
.cards {
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.no-cards-warning {
  text-align: center;
}
</style>
