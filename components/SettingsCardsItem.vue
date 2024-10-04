<template>
  <li class="card">
    <div v-if="!isEditing" class="wrapper">
      <div class="buttons">
        <button @click="isEditing = true" class="button"><IconEdit /></button>
        <button @click="store.deleteSticker(id)" class="button">
          <IconDelete />
        </button>
      </div>
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
.wrapper {
  word-break: break-all;
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
  width: 100%;
}
.text {
  margin: auto;
}

.buttons {
  display: flex;
  justify-content: space-between;
}
</style>
