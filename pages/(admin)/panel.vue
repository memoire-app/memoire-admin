<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
const runtimeConfig = useRuntimeConfig();
const response = await $fetch("stats", {
  baseURL: runtimeConfig.public.BACK_ADMIN_URL as string,
  credentials: "include",
  method: "GET",
});
</script>

<template>
  <div>
    {{ response }}
  </div>
</template>
