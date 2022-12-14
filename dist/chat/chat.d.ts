import { FC, Component, ReactNode } from "react";
import { BaseObjectsEvent, FileEvent, MessageActionEvent, PresenceEvent, SignalEvent, StatusEvent } from "pubnub";
import { MessageEnvelope, RetryOptions, Themes, UserEntity } from "../types";
import "./chat.scss";
export interface ChatProps {
    children?: ReactNode;
    /** General theme to be used by the components.
     * Exact looks can be tweaked later on with the use of CSS variables. */
    theme?: Themes;
    /** Current channel to display the messages and members from. */
    currentChannel: string;
    /** Array of channels to subscribe to get events. Allows up to 50 channels. Setting this option will disable the auto subscription when switching the current channel. */
    channels?: string[];
    /** Array of channel groups to subscribe to get events. Allows up to 50 channel groups. Setting this option will disable the auto subscription when switching the current channel group. */
    channelGroups?: string[];
    /** Option to disable presence events when set to "false." OccupancyIndicator and MemberList components will only work with memberships in that case. */
    enablePresence?: boolean;
    /** Option to provide an external list of user metadata. It's used to display information about senders on MessageList and TypingIndicator. */
    users?: UserEntity[];
    /** Option to define a timeout in seconds for typing indicators to hide after the last typed character. */
    typingIndicatorTimeout?: number;
    /** Options for automatic retries on errors. */
    retryOptions?: RetryOptions;
    /** Callback run on new messages. */
    onMessage?: (message: MessageEnvelope) => unknown;
    /** Callback run on signals. */
    onSignal?: (message: SignalEvent) => unknown;
    /** Callback run on message actions. */
    onMessageAction?: (event: MessageActionEvent) => unknown;
    /** Callback run on presence events. */
    onPresence?: (event: PresenceEvent) => unknown;
    /** Callback run on object events. */
    onUser?: (event: BaseObjectsEvent) => unknown;
    /** Callback run on object events. */
    onChannel?: (event: BaseObjectsEvent) => unknown;
    /** Callback run on object events. */
    onMembership?: (event: BaseObjectsEvent) => unknown;
    /** Callback run on file events. */
    onFile?: (event: FileEvent) => unknown;
    /** Callback run on status events. */
    onStatus?: (event: StatusEvent) => unknown;
    /** Callback run on any type of errors raised by the components. */
    onError?: (error: Error) => unknown;
}
/**
 * Chat provider is used to configure various common options and feed the components with data.
 * It expects at least a "current" channel to display within components.
 *
 * Chat itself is supposed to be wrapped with a PubNubProvider component that is a part of the
 * PubNub React SDK. You should use it to pre-configure your PubNub instance. Please see Getting
 * Started page for details.
 */
export declare class Chat extends Component<ChatProps> {
    constructor(props: ChatProps);
    static defaultProps: {
        channels: any[];
        channelGroups: any[];
        theme: "light";
        enablePresence: boolean;
        typingIndicatorTimeout: number;
        users: any[];
        retryOptions: {
            maxRetries: number;
            timeout: number;
            exponentialFactor: number;
        };
        onError: () => void;
    };
    static getDerivedStateFromError(error: Error): {
        error: Error;
    };
    componentDidCatch(error: Error): void;
    render(): JSX.Element;
}
/**
 *
 *  Internal Chat wrapper with all business logic
 *
 */
export declare const ChatInternal: FC<ChatProps>;
