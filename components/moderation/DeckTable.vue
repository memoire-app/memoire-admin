<script setup lang="ts">
import type { Data } from "~/pages/(admin)/moderation.vue";

defineProps<{
  decks: Data[];
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
];
</script>

<template>
  <div class="w-full">
    <UTable :columns="columns" :rows="decks" />
  </div>
</template>
