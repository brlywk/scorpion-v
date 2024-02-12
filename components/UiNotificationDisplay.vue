<script setup lang="ts">
import { ref } from "vue";
import { CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon, XCircleIcon } from "@heroicons/vue/24/outline";
import { XMarkIcon } from "@heroicons/vue/20/solid";
import type { UiNotificationMessage } from "~/types/uiNotificiatons";

// ----- Props -----------------------------------
type UiNotificationProps = {
    notification: UiNotificationMessage;
    timeOutSec?: number;
};

const props = withDefaults(defineProps<UiNotificationProps>(), {
    timeOutSec: 2,
});

// ----- Data ------------------------------------
const show = ref(false);
const { dismissNotification } = useUiNotificationStore();
const progressStyle = { animation: `progressBar ${props.timeOutSec}s linear forwards` };

// Set up timer to automatically hide notification
let timer: NodeJS.Timeout;

function dismiss() {
    show.value = false;
    dismissNotification(props.notification.id);
}

// ----- Lifecycle -------------------------------
onMounted(() => {
    show.value = true;

    timer = setTimeout(() => {
        show.value = false;
        dismissNotification(props.notification.id);
    }, props.timeOutSec * 1000);
});

onUnmounted(() => {
    clearTimeout(timer);
});
</script>

<template>
    <!-- Actual notificaton display -->
    <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div
            v-if="show"
            class="pointer-events-auto relative w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
            <!-- Notificaton progress bar -->
            <div class="min-h-1 absolute top-0 w-full">
                <div
                    :class="cl('h-1 origin-left', {
                        'bg-gray-300': notification.type === 'info',
                        'bg-green-500': notification.type === 'success',
                        'bg-amber-500': notification.type === 'warning',
                        'bg-red-500': notification.type === 'error',
                    })" :style="progressStyle"
                />
            </div>

            <!-- Notification panel -->
            <div class="p-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <!-- Icon to show -->
                        <InformationCircleIcon
                            v-if="notification.type === 'info'" class="h-6 w-6 text-gray-500"
                            aria-hidden="true"
                        />
                        <CheckCircleIcon
                            v-else-if="notification.type === 'success'" class="h-6 w-6 text-green-500"
                            aria-hidden="true"
                        />
                        <ExclamationCircleIcon
                            v-else-if="notification.type === 'warning'" class="h-6 w-6 text-amber-500"
                            aria-hidden="true"
                        />
                        <XCircleIcon v-else class="h-6 w-6 text-red-500" aria-hidden="true" />
                    </div>
                    <div class="ml-3 w-0 flex-1 items-center">
                        <!-- Notification content -->
                        <p
                            :class="cl('text-sm', {
                                'text-gray-500': notification.type === 'info',
                                'text-green-500': notification.type === 'success',
                                'text-amber-500': notification.type === 'warning',
                                'text-red-500': notification.type === 'error' })"
                        >
                            {{ notification.message }}
                        </p>
                    </div>
                    <div class="ml-4 flex flex-shrink-0">
                        <button
                            type="button"
                            class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            @click="dismiss"
                        >
                            <span class="sr-only">Close</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style>
@keyframes progressBar {
from {
    transform: scaleX(1)
}
to {
    transform: scaleX(0)
}
}
</style>
