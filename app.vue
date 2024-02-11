<template>
    <Html class="h-full w-full" />
    <Body class="h-full text-gray-800" />
    <NuxtLayout />
</template>

<!-- Just testing transitions -->
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
