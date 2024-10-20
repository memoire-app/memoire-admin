<template>
  <div class="flex">
    <nav class="bg-slate-100 min-w-[200px] h-screen">
      <div class="flex flex-col mt-16 gap-8 pl-8">
        <NuxtLink to="/panel" class="w-fit flex items-center gap-2">
          <UIcon name="i-lucide-chart-line" />
          Panel
        </NuxtLink>
        <NuxtLink to="/moderation" class="w-fit flex items-center gap-2">
          <UIcon name="i-lucide-hammer" />
          Moderation
        </NuxtLink>
      </div>
    </nav>
    <div class="p-8 w-full">
      <slot />
    </div>
  </div>
</template>
