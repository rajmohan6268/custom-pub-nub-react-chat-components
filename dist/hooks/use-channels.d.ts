import { GetAllMetadataParameters } from "pubnub";
import { ChannelEntity } from "../types";
declare type HookReturnValue = [ChannelEntity[], () => void, number, Error];
export declare const useChannels: (options?: GetAllMetadataParameters) => HookReturnValue;
export {};
