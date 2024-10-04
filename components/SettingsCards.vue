<template>
  <ul class="cards-list">
    <AddButton />
    <SettingsCardsItem
      v-for="card of store.getStickers"
      :key="card.id"
      :id="card.id"
    />
  </ul>
</template>

<script setup lang="ts">
const store = useStickerStore();
</script>

<style scoped lang="scss">
.cards-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2em;

  li {
    height: 300px;
  }
}
</style>
