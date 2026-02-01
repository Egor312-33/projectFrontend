export type MediaMessage = {
    type: "media";
    isMe: boolean;
    src: string;
    time: string;
    isRead?: boolean;
    caption?: string;
};

export type TextMessage = {
    type?: "text";
    isMe: boolean;
    text: string;
    time: string;
    isRead?: boolean;
};

export type Message = MediaMessage | TextMessage;