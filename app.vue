<template>
  <div class="main-wrapper">
    <Header />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const store = useStickerStore();

onMounted(() => {
  syncStickers();
  window.addEventListener("storage", syncStickers);

  onBeforeUnmount(() => {
    window.removeEventListener("storage", syncStickers);
  });
});

function syncStickers() {
  const storedStickers = localStorage.getItem("stickers");
  if (!storedStickers) return;
  store.setStickers(JSON.parse(storedStickers));
}
</script>

<style scoped lang="scss">
.main-wrapper {
  width: Min(90vw, 1300px);
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
