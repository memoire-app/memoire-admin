<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const email = ref("");
const password = ref("");

definePageMeta({
  layout: false,
});

const login = async () => {
  try {
    await $fetch("login", {
      baseURL: runtimeConfig.public.BACK_URL as string,
      credentials: "include",
      method: "POST",
      body: JSON.stringify({ email: email.value, password: password.value }),
    });

    await $fetch("me", {
      baseURL: runtimeConfig.public.BACK_ADMIN_URL as string,
      credentials: "include",
      method: "GET",
    });

    useRouter().push("/panel");
  } catch {
    console.log("Login failed");
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    login();
  }
};
</script>

<template>
  <UContainer class="flex flex-col items-center mt-24">
    <UInput v-model="email" placeholder="Email" class="mb-4" type="email" />
    <UInput
      v-model="password"
      placeholder="Password"
      class="mb-4"
      type="password"
      @keydown="handleKeydown"
    />

    <UButton @click="login" type="submit">Login</UButton>
  </UContainer>
</template>
