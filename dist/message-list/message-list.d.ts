import { FC, ReactElement, ReactNode, UIEvent } from "react";
import { UserEntity, MessageEnvelope, EmojiPickerElementProps } from "../types";
import "./message-list.scss";
export interface MessageRendererProps {
    isOwn: boolean;
    message: MessageEnvelope;
    time: string;
    editedText: string;
    user?: UserEntity;
}
export interface MessageListProps {
    children?: ReactNode;
    /** Option to fetch past messages from storage and display them on a channel. Set a number from "0" to "100". Defaults to "0" to fetch no messages from storage. */
    fetchMessages?: number;
    /** Option to enable rendering reactions that were added to messages. Make sure to also set up reactionsPicker when this option is enabled. */
    enableReactions?: boolean;
    /** Option to provide custom welcome messages to replace the default ones. Set to "false" to disable it. */
    welcomeMessages?: false | MessageEnvelope | MessageEnvelope[];
    /** Option to enable message reactions. Pass it in the emoji picker component. For more details, refer to the Emoji Pickers section in the docs. */
    reactionsPicker?: ReactElement<EmojiPickerElementProps>;
    /** Option to provide an extra actions renderer to add custom action buttons to each message. */
    extraActionsRenderer?: (message: MessageEnvelope) => JSX.Element;
    /** Option to provide a custom message item renderer if themes and CSS variables aren't enough. */
    messageRenderer?: (props: MessageRendererProps) => JSX.Element;
    /** Option to provide a custom message bubble renderer if themes and CSS variables aren't enough. */
    bubbleRenderer?: (props: MessageRendererProps) => JSX.Element;
    /** Option to render only selected messages. */
    filter?: (message: MessageEnvelope) => boolean;
    /** Callback run on a list scroll. */
    onScroll?: (event: UIEvent<HTMLElement>) => unknown;
}
/**
 * Fetches historical messages using the scrolling pagination pattern and subscribes to the current
 * channel to stay up to date with new messages.
 *
 * It also displays data in an interactive list, including
 * user names, avatars, the time when a message was sent, and attachments (links, images) and allows to react to
 * messages with emojis and to show those reactions immediately.
 */
export declare const MessageList: FC<MessageListProps>;
