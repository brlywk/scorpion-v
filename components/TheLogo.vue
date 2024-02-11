<template>
    <NuxtLink :to="$route.fullPath === '/' ? '/' : '/dashboard'" class="group flex flex-row items-center gap-2 transition">
        <IconScorpion class="h-8 w-8 group-hover:text-amber-600" />
        <div class="relative flex flex-col justify-center font-display text-lg group-hover:text-amber-500">
            <div class="relative top-1">
                Project
            </div>
            <div class="relative -top-1">
                Scorpion V
            </div>
        </div>
    </NuxtLink>
</template>
