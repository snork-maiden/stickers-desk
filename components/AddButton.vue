<template>
  <div class="card">
    <button class="add-button" v-if="!isEditing" @click="isEditing = true">
      +
    </button>
    <template v-else>
      <textarea
        v-model="newCardText"
        class="card-textarea"
        placeholder="Введите текст..."
        ref="textarea"
      ></textarea>
      <div class="button-group">
        <button @click="addCard" class="button">Добавить</button>
        <button @click="isEditing = false" class="button">Отменить</button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const store = useStickerStore();

const isEditing = ref(false);
const newCardText = ref("");
const textarea = useTemplateRef("textarea");

function addCard() {
  store.addSticker(newCardText.value);
  isEditing.value = false;
}

watch(isEditing, (value) => {
  if (value) {
    nextTick(() => {
      textarea.value!.focus();
    });
  } else {
    newCardText.value = "";
  }
});
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
