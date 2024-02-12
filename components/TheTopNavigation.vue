<script setup lang="ts">
type NavLink = {
    label: string;
    to: string;
};

const navigation: NavLink[] = [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Expenses", to: "/expenses" },
    { label: "Usage", to: "/usage" },
    { label: "Incomes", to: "/incomes" },
];
</script>

<template>
    <nav class="flex-grow">
        <NuxtLink v-for="link in navigation" :key="`nav-link-${link.label}`" :to="link.to" :class="cl($route.fullPath === link.to && 'border-b-2 border-amber-500', 'text-sm py-2 mx-4 transition-all hover:text-amber-500')">
            {{ link.label }}
        </NuxtLink>
    </nav>
</template>
