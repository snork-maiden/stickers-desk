<template>
  <li class="card">
    <button class="add-button" v-if="!isEditing" @click="isEditing = true">
      +
    </button>
    <EditingCard
      v-else
      @cancel="isEditing = false"
      @confirm="(text:string) => addCard(text)"
    />
  </li>
</template>

<script setup lang="ts">
const store = useStickerStore();

const isEditing = ref(false);

function addCard(text: string) {
  store.addSticker(text);
  isEditing.value = false;
}
</script>

<style scoped lang="scss">
.card {
  height: 400px;
}
.add-button {
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  font-size: min(40vw, 25rem);
  transform: scale(1.3);
  padding: 0;
  line-height: 1;
  font-weight: 300;
  color: rgba(65, 157, 160, 0.15);
}

.card-textarea {
  width: 100%;
  height: 85%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  resize: none;
  margin-bottom: 1em;
}

.button-group {
  display: flex;
  justify-content: space-around;
}
</style>
