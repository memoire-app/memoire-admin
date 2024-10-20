<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
interface Meta {
  total: number;
}
export interface Deck {
  id: number;
  title: string;
  tags: string;
  updatedAt: string;
  flashcards: Flashcard[];
}

export interface Flashcard {
  id: number;
  front: string;
  back: string;
  updatedAt: string;
}

interface Props {
  meta: Meta;
  data: Deck[];
}
const runtimeConfig = useRuntimeConfig();
const { data: moderation } = await useFetch<Props>("moderation", {
  query: { page: 1 },
  baseURL: runtimeConfig.public.BACK_ADMIN_URL as string,
  credentials: "include",
  method: "GET",
});

const page = ref(1);

const navigate = async (page: number) => {
  try {
    const data = await $fetch<Props>(`/moderation`, {
      query: { page },
      baseURL: runtimeConfig.public.BACK_ADMIN_URL as string,
      credentials: "include",
    });
    moderation.value = data;
  } catch {}
};

watch(page, (newPage) => {
  navigate(newPage);
});

const flashcards = computed(() => {
  if (!moderation.value) return [];
  return moderation.value.data
    .map((deck) => {
      return deck.flashcards;
    })
    .flat();
});

const formattedDecks = computed(() => {
  if (!moderation.value) return [];
  return moderation.value.data.map((deck) => ({
    ...deck,
    updatedAt: new Date(deck.updatedAt).toLocaleString(),
  }));
});

const formattedFlashcards = computed(() => {
  if (!moderation.value) return [];
  return flashcards.value.map((flashcard) => ({
    ...flashcard,
    updatedAt: new Date(flashcard.updatedAt).toLocaleString(),
  }));
});
</script>

<template>
  <div>
    <div v-if="moderation">
      <UPagination
        v-model="page"
        :total="moderation.meta.total"
        :page-count="50"
      />

      <div class="flex flex-col gap-16">
        <ModerationDeckTable :decks="formattedDecks" />
        <ModerationFlashcardTable :flashcards="formattedFlashcards" />
      </div>
    </div>
  </div>
</template>
