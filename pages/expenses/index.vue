<script setup lang="ts">
definePageMeta({
    layout: "dashboard",
});
</script>

<template>
    <MainWrapper>
        Expenses page
        <NuxtLink to="/expenses/new">
            Create new
        </NuxtLink>
        <template #sidebar>
            Look at this fancy sidebar!
        </template>
    </MainWrapper>
</template>
