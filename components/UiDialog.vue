<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { ExclamationCircleIcon, InformationCircleIcon, QuestionMarkCircleIcon } from "@heroicons/vue/24/outline";

const dialogStore = useUiDialogStore();
const { activeDialog, visible } = storeToRefs(dialogStore);
const { accept, reject } = dialogStore;

function handleOk() {
    accept();
}

function handleCancel() {
    reject();
}
</script>

<template>
    <TransitionRoot as="template" :show="visible">
        <Dialog as="div" class="relative z-10" @close="handleCancel">
            <!-- Background Effect -->
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <!-- Main Dialog -->
            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                            <div class="sm:flex sm:items-start">
                                <div
                                    :class="cl('mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10', {
                                        'bg-red-500 text-white': activeDialog?.type === 'warning',
                                        'bg-gray-100 text-gray-500': activeDialog?.type !== 'warning',
                                    })"
                                >
                                    <ExclamationCircleIcon v-if="activeDialog?.type === 'warning'" class="h-6 w-6" aria-hidden="true" />
                                    <InformationCircleIcon v-else-if="activeDialog?.type === 'info'" class="h-6 w-6" aria-hidden="true" />
                                    <QuestionMarkCircleIcon v-else class="h-6 w-6" aria-hidden="true" />
                                </div>
                                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">
                                        <span v-if="activeDialog">
                                            {{ activeDialog.title }}
                                        </span>
                                        <span v-else class="text-white">
                                            Processin...
                                        </span>
                                    </DialogTitle>
                                    <div class="mt-2">
                                        <p v-if="activeDialog" class="text-sm text-gray-500">
                                            {{ activeDialog?.message }}
                                        </p>
                                        <p v-else class="text-sm text-white">
                                            Processing...
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- Buttons -->
                            <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button" :class="cl('inline-flex transition-all w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto', {
                                        'text-red-500 border border-red-500 hover:bg-red-500 hover:text-white': activeDialog?.type === 'warning',
                                        'text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white': activeDialog?.type !== 'warning',
                                    })" @click="handleOk"
                                >
                                    Okay
                                </button>
                                <button
                                    v-if="activeDialog?.type !== 'info'"
                                    type="button" class="inline-flex w-full justify-center rounded-md border border-transparent px-3 py-2 text-sm font-semibold transition-all hover:border-gray-300 hover:shadow-sm sm:ml-3 sm:w-auto"
                                    @click="handleCancel"
                                >
                                    Cancel
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
