<script setup lang="ts">
</script>

<template>
    <main
        :class="cl('mx-auto mt-8 w-full max-w-screen-xl', {
            'grid-cols-1 grid gap-4 lg:grid-cols-[25%_75%]': $slots.sidebar,
        })"
    >
        <aside v-if="$slots.sidebar">
            <slot name="sidebar" />
        </aside>
        <slot />
    </main>
</template>
