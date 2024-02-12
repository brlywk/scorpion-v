const uiNotificationTypeList = ["info", "success", "warning", "error"] as const;

export type UiNotificationType = (typeof uiNotificationTypeList)[number];
export type UiNotificationMessage = {
    id: string;
    type: (typeof uiNotificationTypeList)[number];
    message: string;
};
