import { GetMembershipsParametersv2 } from "pubnub";
import { ChannelEntity } from "../types";
declare type HookReturnValue = [ChannelEntity[], () => void, () => void, number, Error];
export declare const useUserMemberships: (options?: GetMembershipsParametersv2) => HookReturnValue;
export {};
