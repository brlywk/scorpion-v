<script setup lang="ts">
import { ArrowUpIcon } from "@heroicons/vue/24/outline";

const visible = ref(false);
const scrollThreshold = 100;

function handleClick() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

function handleScroll() {
    visible.value = window.scrollY > scrollThreshold;
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <Transition enter-from-class="opacity-0" enter-active-class="transition-opacity duration-300" leave-to-class="opacity-0" leave-active-class="transition-opacity duration-300">
        <button v-if="visible" class="fixed bottom-4 right-4 rounded-lg border border-gray-300 p-4 text-gray-600 shadow hover:bg-gray-100 hover:text-gray-800" @click.prevent="handleClick">
            <ArrowUpIcon class="h-6 w-6" />
        </button>
    </Transition>
</template>
