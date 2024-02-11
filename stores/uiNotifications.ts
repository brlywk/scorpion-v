import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";
import type {
    UiNotificationMessage,
    UiNotificationType,
} from "~/types/uiNotificiatons";

type UiNotificationState = {
    allNotifications: UiNotificationMessage[];
};

export const useUiNotificationStore = defineStore("ui-notifications", {
    state: (): UiNotificationState => {
        return {
            allNotifications: [],
        };
    },
    getters: {
        hasNotifications: state => state.allNotifications.length > 0,
    },
    actions: {
        addNotification(type: UiNotificationType, message: string) {
            this.allNotifications.push({
                id: `ui-${uuid()}`,
                type,
                message,
            });
        },
        dismissNotification(id: string) {
            this.allNotifications = this.allNotifications.filter(
                notif => notif.id !== id,
            );
        },
        dismissAllNotifications() {
            this.allNotifications = [];
        },
    },
});
