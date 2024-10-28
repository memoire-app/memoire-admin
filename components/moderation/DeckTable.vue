<script setup lang="ts">
import type { Deck } from "~/pages/(admin)/moderation.vue";

const props = defineProps<{
  decks: Deck[];
}>();

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "title",
    label: "Title",
  },
  {
    key: "tags",
    label: "Tags",
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
    await $fetch(`/moderation/decks/${id}`, {
      method: "DELETE",
      baseURL: runtimeConfig.public.BACK_ADMIN_URL as string,
      credentials: "include",
    });

    toast.add({ title: "Deck deleted" });
  } catch {
    toast.add({ title: "Failed to delete deck", color: "red" });
  }
};
</script>

<template>
  <div class="max-h-[600px] overflow-auto w-fit">
    <UTable :columns="columns" :rows="props.decks">
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
