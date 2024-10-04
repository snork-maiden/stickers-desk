interface Sticker {
  id: number;
  text: string;
}
export const useStickerStore = defineStore("stickerStore", () => {
  const stickers = ref<Sticker[]>(loadStickersFromLocalStorage());

  const isStickers = computed(() => !!stickers.value.length);
  const getStickers = computed(() => stickers.value);

  function addSticker(text: string) {
    stickers.value.push({
      id: Date.now(),
      text,
    });
  }
  function getTextById(id: number) {
    const sticker = stickers.value.find((sticker) => sticker.id === id);
    if (sticker) {
      return sticker.text;
    }
  }
  function deleteSticker(id: number) {
    stickers.value = stickers.value.filter((sticker) => sticker.id !== id);
  }

  function editSticker(id: number, newText: string) {
    const sticker = stickers.value.find((sticker) => sticker.id === id);
    if (sticker) {
      sticker.text = newText;
    }
  }

  watch(
    stickers,
    (newValue) => {
      saveStickersToLocalStorage(newValue);
    },
    { deep: true }
  );

  return {
    isStickers,
    getStickers,
    addSticker,
    deleteSticker,
    editSticker,
    getTextById,
  };
});

function saveStickersToLocalStorage(stickers: Sticker[]) {
  localStorage.setItem("stickers", JSON.stringify(stickers));
}

function loadStickersFromLocalStorage(): Sticker[] {
  const storedStickers = localStorage.getItem("stickers");
  return storedStickers ? JSON.parse(storedStickers) : [];
}
