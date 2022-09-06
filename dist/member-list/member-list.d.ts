import { FC, ReactNode } from "react";
import { UserEntity } from "../types";
import "./member-list.scss";
export interface MemberListProps {
    children?: ReactNode;
    /** Option to pass a list of members, including metadata, to render on the list. */
    members: UserEntity[] | string[];
    /** Option to pass a list of present member IDs to mark them with a presence indicator. */
    presentMembers?: string[];
    /** This text will be added after current user's name */
    selfText?: string;
    /** Members are sorted by presence and alphabetically by default, you can override that by providing a sorter function */
    sort?: (a: UserEntity, b: UserEntity) => -1 | 0 | 1;
    /** Provide extra actions renderer to add custom action buttons to each member */
    extraActionsRenderer?: (member: UserEntity) => JSX.Element;
    /** Option to provide a custom user renderer to override themes and CSS variables. */
    memberRenderer?: (member: UserEntity) => JSX.Element;
    /** A callback run when user clicked one of the members. */
    onMemberClicked?: (member: UserEntity) => unknown;
}
/**
 * Renders a list of members.
 *
 * It can represent all users of the application, only members of
 * the current channel, users currently subscribed/present on the channel, or whatever else is passed
 * into it. Custom memberRenderer can be used to modify how the users are rendered. For example
 * you can add presence indicators.
 */
export declare const MemberList: FC<MemberListProps>;
