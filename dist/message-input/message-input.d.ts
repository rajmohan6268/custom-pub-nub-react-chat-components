import { FC, ReactElement } from "react";
import { MessagePayload, EmojiPickerElementProps } from "../types";
import "./message-input.scss";
export interface MessageInputProps {
    /** Option to set a placeholder message to display in the text window. */
    placeholder?: string;
    /** Option to set a draft message to display in the text window. */
    draftMessage?: string;
    /** Option to attach sender data directly to each message. Enable it for high-throughput environments.
     * This is an alternative to providing a full list of users directly into the Chat provider. */
    senderInfo?: boolean;
    /** Option to enable/disable firing the typing events when a user is typing a message. */
    typingIndicator?: boolean;
    /** Option to enable/disable the internal file upload capability. */
    fileUpload?: "image" | "all";
    /** Option to disable the input from composing and sending messages. */
    disabled?: boolean;
    /** Option to hide the Send button. */
    hideSendButton?: boolean;
    /** Custom UI component to override default display for the Send button. */
    sendButton?: JSX.Element | string;
    /** Option to pass in an emoji picker if you want it to be rendered in the input. For more details, refer to the Emoji Pickers section in the docs. */
    emojiPicker?: ReactElement<EmojiPickerElementProps>;
    /** Callback to handle an event when the text value changes. */
    onChange?: (value: string) => void;
    /** Callback to modify message content before sending it. This only works for text messages, not files. */
    onBeforeSend?: (value: MessagePayload) => MessagePayload;
    /** Callback for extra actions after sending a message. */
    onSend?: (value: MessagePayload | File) => void;
    /** Option to provide an extra actions renderer to add custom action buttons to the input. */
    extraActionsRenderer?: () => JSX.Element;
}
/**
 * Allows users to compose messages using text and emojis
 * and automatically publish them on PubNub channels upon sending.
 */
export declare const MessageInput: FC<MessageInputProps>;
