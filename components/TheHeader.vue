<script setup lang="ts"></script>

<template>
    <header class="sticky top-0 items-center bg-white/70 backdrop-blur-lg">
        <div class="mx-auto flex max-w-screen-xl items-center gap-4 py-1">
            <TheLogo />
            <TheTopNavigation />
            <SearchBar />
            <NotificationButton />
            <UserButton />
        </div>
        <ClientOnly>
            <TheHeaderScrollEffect />
        </ClientOnly>
    </header>
</template>
