<template>
  <section class="cards">
    <ul class="cards-list">
      <li v-for="card of store.getStickers" :key="card.id" class="card">
        {{ card.text }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const store = useStickerStore();
</script>

<style scoped lang="scss">
.cards {
  display: grid;
  place-items: center;
}

.cards-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  padding: 0;
  justify-content: center;
}

.card {
  aspect-ratio: 1/1;
}
</style>
