import { GetAllMetadataParameters } from "pubnub";
import { UserEntity } from "../types";
declare type HookReturnValue = [UserEntity[], () => void, number, Error];
export declare const useUsers: (options?: GetAllMetadataParameters) => HookReturnValue;
export {};
