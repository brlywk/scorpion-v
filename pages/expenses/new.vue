<script setup lang="ts">
definePageMeta({
    layout: "dashboard",
});
</script>

<template>
    <MainWrapper>
        <ExpenseForm />
        <template #sidebar>
            Some intersting information will show up here
        </template>
    </MainWrapper>
</template>
