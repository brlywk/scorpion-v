const uiDialogTypesList = ["info", "question", "warning"] as const;
const uiDialogResponeList = ["accepted", "rejected", "pending"] as const;

export type UiDialogType = (typeof uiDialogTypesList)[number];
export type UiDialogResponse = (typeof uiDialogResponeList)[number];

export type UiDialogMessage = {
    type: UiDialogType;
    message: string;
    title: string;
};
