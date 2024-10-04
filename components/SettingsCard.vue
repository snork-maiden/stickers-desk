<template>
  <li class="card">
    <div v-if="!isEditing">
      <button @click="isEditing = true">Редактировать</button>
      <button @click="store.deleteSticker(id)">Удалить</button>
      <p class="text">
        {{ text }}
      </p>
    </div>
    <EditingCard
      v-if="isEditing"
      @cancel="isEditing = false"
      @confirm="(text) => editCard(text)"
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

.card {
  aspect-ratio: 1/1;
}
</style>
