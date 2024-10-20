<script setup lang="ts">
import type { Deck, Flashcard } from "~/pages/(admin)/moderation.vue";

defineProps<{
  flashcards: Flashcard[];
}>();

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "front",
    label: "Front",
  },
  {
    key: "back",
    label: "Back",
  },
  {
    key: "updatedAt",
    label: "Last update",
  },
  {
    key: "actions",
    label: "Actions",
  },
];
</script>

<template>
  <div class="w-fit max-h-[600px] overflow-auto">
    <UTable :columns="columns" :rows="flashcards">
      <template #actions-data="{ row }">
        <div class="flex gap-2 items-center">
          <UButton square color="red" icon="i-lucide-trash" />
          <UButton square icon="i-lucide-pencil" />
        </div>
      </template>
    </UTable>
  </div>
</template>
