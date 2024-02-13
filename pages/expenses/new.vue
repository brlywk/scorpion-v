<script setup lang="ts">
import type { CategorySelect } from "~/db/schemas/categories";

definePageMeta({
    layout: "dashboard",
});

const { data: categoryList, pending, execute, status } = useFetch<CategorySelect[]>("/api/categories");
</script>

<template>
    <MainWrapper>
        <ExpenseForm :category-list="categoryList as CategorySelect[]" />
        <template #sidebar>
            Some intersting information will show up here
        </template>
    </MainWrapper>
</template>
