<template>
  <main class="main">
    <Breadcrumb />
    <section class="cards">
      <p v-if="!isStickers" class="no-cards-warning">
        Добавьте свой первый стикер
      </p>
      <ul class="cards-list">
        
        <AddButton />
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
const { isStickers } = storeToRefs(useStickerStore());
</script>

<style scoped lang="scss">
.cards {
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
.cards-list {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
}

.no-cards-warning {
  text-align: center;
}
</style>
