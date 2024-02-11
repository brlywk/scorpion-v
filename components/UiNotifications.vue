<script setup lang="ts">
import { useUiNotificationStore } from "~/stores/uiNotifications";

// setting this here, this should be universal, so not using a prop
const maxNotifications = 3;

const uiNotificationStore = useUiNotificationStore();
</script>

<template>
    <!-- Notification area (i.e. where notifications can appear) -->
    <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex flex-col items-center justify-end gap-4 px-4 py-8 lg:items-end lg:justify-start lg:py-20">
        <UiNotificationDisplay
            v-for="notification in uiNotificationStore.allNotifications.slice(0, maxNotifications)"
            :key="notification.id" :notification="notification"
        />
    </div>
</template>
