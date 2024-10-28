<script setup lang="ts">
import type { Flashcard } from "~/pages/(admin)/moderation.vue";

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

const runtimeConfig = useRuntimeConfig();
const toast = useToast();

const deleteRow = async (id: number) => {
  try {
    await $fetch(`/moderation/flashcards/${id}`, {
      method: "DELETE",
      baseURL: runtimeConfig.public.BACK_ADMIN_URL as string,
      credentials: "include",
    });

    toast.add({ title: "Flashcard deleted" });
  } catch {
    toast.add({ title: "Failed to delete flashcard", color: "red" });
  }
};
</script>

<template>
  <div class="w-fit max-h-[600px] overflow-auto">
    <UTable :columns="columns" :rows="flashcards">
      <template #actions-data="{ row }">
        <div class="flex gap-2 items-center">
          <UButton
            square
            color="red"
            icon="i-lucide-trash"
            @click="deleteRow(row.id)"
          />
        </div>
      </template>
    </UTable>
  </div>
</template>
