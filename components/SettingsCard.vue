<template>
  <li class="card">
    <div v-if="!isEditing" class="wrapper">
      <button @click="isEditing = true"><IconEdit /></button>
      <button @click="store.deleteSticker(id)"><IconCancel/></button>
      <p class="text">
        {{ text }}
      </p>
    </div>
    <EditingCard
      v-if="isEditing"
      @cancel="isEditing = false"
      @confirm="(text:string) => editCard(text)"
      :text="text"
    />
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: number;
}>();
const store = useStickerStore();
const text = computed(() => store.getTextById(props.id));
const isEditing = ref(false);

function editCard(newText: string) {
  isEditing.value = false;
  if (newText === text.value) return;
  store.editSticker(props.id, newText);
}
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

.wrapper {
  overflow-y: auto;
  word-break: break-all;
}

.card {
  height: 300px;
}
</style>
