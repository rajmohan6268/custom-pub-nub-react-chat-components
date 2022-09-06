import { GetChannelMembersParameters } from "pubnub";
import { UserEntity } from "../types";
declare type HookReturnValue = [UserEntity[], () => void, () => void, number, Error];
export declare const useChannelMembers: (options: GetChannelMembersParameters) => HookReturnValue;
export {};
