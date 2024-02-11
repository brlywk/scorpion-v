<script setup lang="ts">
</script>

<template>
    <main class="mx-auto w-full max-w-screen-xl">
        <aside v-if="$slots.sidebar">
            <slot name="sidebar" />
        </aside>
        <slot />
    </main>
</template>
