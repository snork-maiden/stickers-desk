<template>
  <textarea
    v-model="newCardText"
    class="card-textarea"
    placeholder="Введите текст..."
    ref="textarea"
  ></textarea>
  <div class="button-group">
    <button
      @click="$emit('confirm', newCardText)"
      class="button"
      :disabled="!newCardText.length"
    >
      <IconConfirm />
    </button>
    <button @click="$emit('cancel')" class="button"><IconCancel /></button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text?: string;
}>();

defineEmits<{
  (e: "confirm", text: string): void;
  (e: "cancel"): void;
}>();
const newCardText = ref(props.text ?? "");
const textarea = useTemplateRef("textarea");

onMounted(() => {
  textarea.value!.focus();
});
</script>

<style scoped lang="scss">
.card-textarea {
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  resize: none;
  margin-bottom: 1em;
}

.button-group {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
</style>
