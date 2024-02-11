<script setup lang="ts">
const scrollOffset = 42;
const isScrolled = ref(false);

function handleScroll() {
    isScrolled.value = window.scrollY > scrollOffset;
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <div :class="cl(isScrolled && 'bg-gray-300 h-[1px]')" />
</template>
