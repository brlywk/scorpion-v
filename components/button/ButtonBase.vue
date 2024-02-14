<script setup lang="ts">
// overwriting class attribute to prevent Vue fallthrough, so
// we can properly merge tailwind classes
const props = defineProps<{ class?: string }>();
</script>

<template>
    <button :class="cl('px-3 py-2 text-sm font-semibold rounded-md border transition-all', props.class)">
        <slot />
    </button>
</template>
