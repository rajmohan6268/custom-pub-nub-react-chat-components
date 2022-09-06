import { HereNowParameters, HereNowResponse } from "pubnub";
declare type ChannelsOccupancy = HereNowResponse["channels"];
declare type HookReturnValue = [ChannelsOccupancy, () => void, number, Error];
export declare const usePresence: (options?: HereNowParameters) => HookReturnValue;
export {};
