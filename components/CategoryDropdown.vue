<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
import type { CategorySelect } from "~/db/schemas/categories";

const props = defineProps<{ categoryList: CategorySelect[] }>();
const selectedId = defineModel<string>();
const selectedCategory = computed(() => props.categoryList?.find(c => c.id === selectedId.value));

function handleChange(id: string) {
    selectedId.value = id;
}
</script>

<template>
    <Menu as="div" class="relative mt-2 inline-block w-full text-left">
        <div>
            <MenuButton
                id="category-dropdown-button"
                class="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
                <div class="flex items-center gap-2">
                    <IconDynamic :file-name="selectedCategory?.icon" class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    {{ selectedCategory?.name }}
                </div>
                <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400 transition-all ui-open:rotate-180" aria-hidden="true" />
            </MenuButton>
        </div>

        <transition
            enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"
        >
            <MenuItems
                class="absolute left-0 z-10 mt-2 w-full origin-top-left overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
                <MenuItem v-for="category in props.categoryList" v-slot="{ active }" :key="category.id">
                    <a
                        href="#" class="group flex items-center px-4 py-2 text-sm"
                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']" @click="handleChange(category.id)"
                    >
                        <IconDynamic
                            :file-name="category.icon" class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                        />
                        {{ category.name }}
                    </a>
                </MenuItem>
            </MenuItems>
        </transition>
    </Menu>
</template>
