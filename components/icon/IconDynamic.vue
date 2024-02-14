<script setup lang="ts">
import type { FunctionalComponent } from "vue";

type DynamicIconProps = {
    componentName: string;
    class?: string;
};

const props = withDefaults(defineProps<DynamicIconProps>(), {
    class: "w-4 h-4",
});

const dynamicComponent = ref<FunctionalComponent | null>(null);

import("@heroicons/vue/24/outline").then(module => {
    if (module[props.componentName]) {
        dynamicComponent.value = module[props.componentName] as FunctionalComponent;
    }
});
</script>

<template>
    <component :is="dynamicComponent" v-if="dynamicComponent" :class="cl(props.class)" />
    <div v-else :class="cl(props.class, 'bg-gray-100 rounded-full animate-pulse')" />
</template>
