import { defineStore } from "pinia";
import type {
    UiDialogMessage,
    UiDialogResponse,
    UiDialogType,
} from "~/types/uiDialog";

type UiDialogStoreProps = {
    activeDialog: UiDialogMessage | null;
    userResponse: UiDialogResponse;
};

// NOTE:
// Pending really is only the initial state, as this state will never be
// set again after the first message to the user...
export const useUiDialogStore = defineStore("ui-dialog", {
    state: (): UiDialogStoreProps => {
        return {
            activeDialog: null,
            userResponse: "pending",
        };
    },
    getters: {
        visible: state => state.activeDialog !== null,
        accepted: state => state.userResponse === "accepted",
        rejected: state => state.userResponse === "rejected",
        pending: state => state.userResponse === "pending",
    },
    actions: {
        accept() {
            this.userResponse = "accepted";
            this.activeDialog = null;
        },
        reject() {
            this.userResponse = "rejected";
            this.activeDialog = null;
        },
        newDialog(type: UiDialogType, title: string, message: string) {
            this.activeDialog = { type, title, message };
        },
    },
});
