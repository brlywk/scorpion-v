<script setup lang="ts">
import type { ExpenseSelect } from "~/db/schemas/expenses";

const { data: expensesList, pending, execute, status } = useFetch<ExpenseSelect[]>("/api/expenses", { server: false, immediate: false });
</script>

<template>
    <button v-if="status === 'idle'" @click="execute()">
        Fetch!
    </button>
    <div v-else-if="pending">
        Loading...
    </div>
    <ul v-else>
        <li v-for="e in expensesList" :key="e.id">
            {{ e.name }}
        </li>
    </ul>
</template>
