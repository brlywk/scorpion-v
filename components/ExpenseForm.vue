<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import type { CategorySelect } from "~/db/schemas/categories";
import type { ExpenseInsert } from "~/db/schemas/expenses";
import { type Currency, billingCycleList, currencyList } from "~/db/types";

const props = defineProps<{ categoryList: CategorySelect[] }>();

const curList = ref(currencyList);
const cycleList = ref(billingCycleList);

const defaultNewExpense: ExpenseInsert = {
    userId: "example-user-id",
    name: "",
    price: 0.00,
    currency: "EUR",
    billingCycle: "Monthly",
};
const newExpense = reactive(defaultNewExpense);

// Parse input and send to server for ritual blood magic
function handleSubmit() {
    console.log(newExpense);
}

// We need to 'manually' reset some values
function handleReset() {
    newExpense.billingCycle = "Monthly";
}
</script>

<template>
    <form class="flex flex-col rounded-lg border border-gray-300 bg-gray-50/40 shadow" @submit.prevent="handleSubmit" @reset="handleReset">
        <!-- Name -->
        <div class="p-4">
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <div class="mt-2">
                <input id="name" v-model="newExpense.name" type="text" name="name" class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 focus-visible:outline-none sm:text-sm sm:leading-6" placeholder="Name">
            </div>
        </div>

        <!-- Price -->
        <div class="p-4">
            <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
            <div class="relative mt-2 rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span class="text-gray-500 sm:text-sm">{{ currencySymbol(newExpense.currency as Currency) }}</span>
                </div>
                <input id="price" v-model="newExpense.price" type="text" name="price" class="block w-full rounded-md border-0 py-2 pl-8 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 focus-visible:outline-none sm:text-sm sm:leading-6" placeholder="0.00" @focus="(e) => (e.target as HTMLInputElement)?.select()">
                <div class="absolute inset-y-0 right-0 flex items-center">
                    <label for="currency" class="sr-only">Currency</label>
                    <select id="currency" v-model="newExpense.currency" name="currency" class="h-full cursor-pointer rounded-md border-0 bg-transparent px-2 py-0 text-sm text-gray-500 focus:ring-2 focus:ring-inset focus:ring-amber-500 focus-visible:outline-none">
                        <option v-for="cur in curList" :key="cur">
                            {{ cur }}
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Billing Cycle -->
        <div class="p-4">
            <div class="flex items-center justify-between">
                <h2 class="text-sm font-medium leading-6 text-gray-900">
                    Billing Cycle
                </h2>
            </div>

            <RadioGroup id="billingCycle" v-model="newExpense.billingCycle" class="mt-2">
                <RadioGroupLabel id="billingCycleLabel" class="sr-only">
                    Choose a memory option
                </RadioGroupLabel>
                <div class="flex flex-row gap-4">
                    <RadioGroupOption v-for="cycle in cycleList" id="billingCycleOptions" :key="cycle" v-slot="{ active, checked }" as="template" :value="cycle">
                        <div class="flex cursor-pointer items-center justify-center rounded-md px-3 py-3 text-sm font-semibold shadow-sm sm:flex-1" :class="[active ? 'ring-2 ring-amber-500 ring-offset-2' : '', checked ? 'bg-amber-500 text-white hover:bg-amber-400' : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50']">
                            <RadioGroupLabel :id="cycle" as="span">
                                {{ cycle }}
                            </RadioGroupLabel>
                        </div>
                    </RadioGroupOption>
                </div>
            </RadioGroup>
        </div>

        <!-- Categories -->
        <div>
            <div v-for="c in props.categoryList" :key="c.id" class="flex flex-row items-center gap-2">
                <IconDynamic :component-name="c.icon" />
                <span class="text-sm">{{ c.name }}</span>
            </div>
        </div>

        <!-- Button -->
        <div class="mt-4 flex flex-row items-center justify-end gap-4 border-t border-t-gray-300 p-4">
            <button type="reset" class="rounded-md border border-transparent px-3 py-2 text-sm font-semibold transition-all hover:border-amber-500 hover:text-amber-500 hover:shadow-sm">
                Reset
            </button>
            <button type="submit" class="rounded-md border border-green-600 px-3 py-2 text-sm font-semibold text-green-600 shadow-sm transition-all hover:bg-green-600 hover:text-white">
                Submit
            </button>
        </div>
        <ButtonBase class="border-gray-500 hover:bg-gray-300" @click="() => console.log('test')">
            Test
        </ButtonBase>
    </form>
</template>
