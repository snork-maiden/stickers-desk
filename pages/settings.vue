<template>
  <main class="main">
    <Breadcrumb />
    <section class="cards">
      <p v-if="!store.isStickers" class="no-cards-warning">
        Добавьте свой первый стикер
      </p>
      <ul class="cards-list">
        <SettingsCard
          v-for="card of store.getStickers"
          :key="card.id"
          :id="card.id"
        />
        <AddButton />
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
const store = useStickerStore();
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2em;
}

.no-cards-warning {
  text-align: center;
}
</style>
