<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { ArrowPathIcon } from "@heroicons/vue/24/outline";
import type { CategorySelect } from "~/db/schemas/categories";
import { type ExpenseInsert, expensesInsertSchema } from "~/db/schemas/expenses";
import { type Currency, billingCycleList, currencyList } from "~/db/types";
import { defaultCategoryId } from "~/config/defaults";

const props = defineProps<{ categoryList: CategorySelect[] }>();

const { addNotification } = useUiNotificationStore();

const curList = ref(currencyList);
const cycleList = ref(billingCycleList);
const submitPending = ref(false);

const defaultNewExpense: ExpenseInsert = {
    userId: "example-user-id",
    name: "",
    price: 0.00,
    currency: "EUR",
    billingCycle: "Monthly",
    categoryId: defaultCategoryId,
} as const;
let newExpense = reactive({ ...defaultNewExpense });

// Parse input and send to server for ritual blood magic
async function handleSubmit() {
    const unsafeExpense = expensesInsertSchema.safeParse(newExpense);

    if (!unsafeExpense.success) {
        // TODO: Display error messages within form here...
        console.error(unsafeExpense.error);
    } else {
        try {
            submitPending.value = true;
            // NOTE:
            // Great video explaining what to use: https://www.youtube.com/watch?v=njsGVmcWviY
            // In short:
            // - useFetch (like all composable) can only be used top-level
            // - For POST requests from client $fetch is generally more recommended
            // - To use useFetch on top-level on client-side, set immediate and watch to false and
            //   call execute in submit handler
            await $fetch("/api/expenses", { method: "post", body: unsafeExpense.data, onResponse({ response }) {
                submitPending.value = false;

                if (response.ok) {
                    addNotification("success", "Expense created.");
                    handleReset();
                    newExpense = { ...defaultNewExpense };
                } else {
                    addNotification("error", `An error occured: ${response.statusText}`);
                }
            } });
        } catch (error: unknown) {
            console.error(error);
        }
    }
}

// We need to 'manually' reset some values
function handleReset() {
    newExpense.billingCycle = "Monthly";
    newExpense.categoryId = defaultCategoryId;
}
</script>

<template>
    <form class="flex flex-col rounded-lg border bg-gray-50/40 shadow md:border-gray-300" @submit.prevent="handleSubmit" @reset="handleReset">
        <!-- Name -->
        <div class="p-4">
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <div class="mt-2">
                <input id="name" v-model.lazy="newExpense.name" type="text" name="name" class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 focus-visible:outline-none sm:text-sm sm:leading-6" placeholder="Name">
            </div>
        </div>

        <!-- Price -->
        <div class="p-4">
            <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
            <div class="relative mt-2 rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span class="text-gray-500 sm:text-sm">{{ currencySymbol(newExpense.currency as Currency) }}</span>
                </div>
                <input id="price" v-model.lazy="newExpense.price" type="number" step=".01" min="0" name="price" class="block w-full rounded-md border-0 py-2 pl-8 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 focus-visible:outline-none sm:text-sm sm:leading-6" placeholder="0.00" @focus="(e) => (e.target as HTMLInputElement)?.select()">
                <div class="absolute inset-y-0 right-0 flex items-center">
                    <label for="currency" class="sr-only">Currency</label>
                    <select id="currency" v-model.lazy="newExpense.currency" name="currency" class="h-full cursor-pointer rounded-md border-0 bg-transparent px-2 py-0 text-sm text-gray-500 focus:ring-2 focus:ring-inset focus:ring-amber-500 focus-visible:outline-none">
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

            <RadioGroup id="billingCycle" v-model.lazy="newExpense.billingCycle" class="mt-2">
                <RadioGroupLabel id="billingCycleLabel" class="sr-only">
                    Choose a memory option
                </RadioGroupLabel>
                <div class="flex flex-row gap-4">
                    <RadioGroupOption v-for="cycle in cycleList" id="billingCycleOptions" :key="cycle" v-slot="{ active, checked }" as="template" :value="cycle">
                        <div class="flex cursor-pointer items-center justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm sm:flex-1" :class="[active ? 'ring-2 ring-amber-500 ring-offset-2' : '', checked ? 'bg-amber-500 text-white hover:bg-amber-400' : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50']">
                            <RadioGroupLabel :id="cycle" as="span">
                                {{ cycle }}
                            </RadioGroupLabel>
                        </div>
                    </RadioGroupOption>
                </div>
            </RadioGroup>
        </div>

        <!-- Categories -->
        <div class="p-4">
            <label for="category" class="block text-sm font-medium leading-6 text-gray-900">Category</label>
            <CategoryDropdown id="category" v-model.lazy="newExpense.categoryId" :category-list="props.categoryList" />
        </div>

        <!-- Button -->
        <div class="mt-4 flex flex-row items-center justify-end gap-4 border-t border-t-gray-300 p-4">
            <ButtonDangerLink type="reset">
                Reset
            </ButtonDangerLink>
            <ButtonSuccess type="submit" :disabled="submitPending" class="flex flex-row items-center gap-2 disabled:saturate-0">
                <ArrowPathIcon v-if="submitPending" class="h-4 w-4 animate-spin" />
                Submit
            </ButtonSuccess>
        </div>
    </form>
</template>
