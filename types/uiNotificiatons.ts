const uiNotificationTypes = ["info", "success", "warning", "error"] as const;

export type UiNotificationType = (typeof uiNotificationTypes)[number];
export type UiNotificationMessage = {
    id: string;
    type: (typeof uiNotificationTypes)[number];
    message: string;
};
