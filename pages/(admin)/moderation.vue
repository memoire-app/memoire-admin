<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
interface Meta {
  total: number;
}
export interface Data {
  id: number;
  title: string;
  tags: string;
  updatedAt: string;
}
interface Props {
  meta: Meta;
  data: Data[];
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
</script>

<template>
  <div>
    <div v-if="moderation">
      <UPagination
        v-model="page"
        :total="moderation.meta.total"
        :page-count="50"
      />

      <ModerationDeckTable :decks="moderation.data" />
    </div>
  </div>
</template>
