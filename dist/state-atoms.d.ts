import { UserEntity, MessageEnvelope, Themes } from "./types";
export declare const ThemeAtom: import("jotai").Atom<"" | Themes> & {
    write: (get: {
        <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
    } & {
        <Value_3>(atom: import("jotai").Atom<Value_3 | Promise<Value_3>>, options: {
            unstable_promise: true;
        }): Value_3 | Promise<Value_3>;
        <Value_4>(atom: import("jotai").Atom<Promise<Value_4>>, options: {
            unstable_promise: true;
        }): Value_4 | Promise<Value_4>;
        <Value_5>(atom: import("jotai").Atom<Value_5>, options: {
            unstable_promise: true;
        }): (Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5) | Promise<Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5>;
    }, set: {
        <Value_6, Result extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_6, undefined, Result>): Result;
        <Value_7, Update, Result_1 extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_7, Update, Result_1>, update: Update): Result_1;
    }, update: "" | Themes | ((prev: "" | Themes) => "" | Themes)) => void;
    onMount?: <S extends (update?: "" | Themes | ((prev: "" | Themes) => "" | Themes)) => void>(setAtom: S) => void | (() => void);
} & {
    init: "" | Themes;
};
export declare const CurrentChannelAtom: import("jotai").Atom<string> & {
    write: (get: {
        <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
    } & {
        <Value_3>(atom: import("jotai").Atom<Value_3 | Promise<Value_3>>, options: {
            unstable_promise: true;
        }): Value_3 | Promise<Value_3>;
        <Value_4>(atom: import("jotai").Atom<Promise<Value_4>>, options: {
            unstable_promise: true;
        }): Value_4 | Promise<Value_4>;
        <Value_5>(atom: import("jotai").Atom<Value_5>, options: {
            unstable_promise: true;
        }): (Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5) | Promise<Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5>;
    }, set: {
        <Value_6, Result extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_6, undefined, Result>): Result;
        <Value_7, Update, Result_1 extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_7, Update, Result_1>, update: Update): Result_1;
    }, update: string | ((prev: string) => string)) => void;
    onMount?: <S extends (update?: string | ((prev: string) => string)) => void>(setAtom: S) => void | (() => void);
} & {
    init: string;
};
export declare const SubscribeChannelsAtom: import("jotai").Atom<string[]> & {
    write: (get: {
        <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
    } & {
        <Value_3>(atom: import("jotai").Atom<Value_3 | Promise<Value_3>>, options: {
            unstable_promise: true;
        }): Value_3 | Promise<Value_3>;
        <Value_4>(atom: import("jotai").Atom<Promise<Value_4>>, options: {
            unstable_promise: true;
        }): Value_4 | Promise<Value_4>;
        <Value_5>(atom: import("jotai").Atom<Value_5>, options: {
            unstable_promise: true;
        }): (Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5) | Promise<Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5>;
    }, set: {
        <Value_6, Result extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_6, undefined, Result>): Result;
        <Value_7, Update, Result_1 extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_7, Update, Result_1>, update: Update): Result_1;
    }, update: string[] | ((prev: string[]) => string[])) => void;
    onMount?: <S extends (update?: string[] | ((prev: string[]) => string[])) => void>(setAtom: S) => void | (() => void);
} & {
    init: string[];
};
export declare const SubscribeChannelGroupsAtom: import("jotai").Atom<string[]> & {
    write: (get: {
        <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
    } & {
        <Value_3>(atom: import("jotai").Atom<Value_3 | Promise<Value_3>>, options: {
            unstable_promise: true;
        }): Value_3 | Promise<Value_3>;
        <Value_4>(atom: import("jotai").Atom<Promise<Value_4>>, options: {
            unstable_promise: true;
        }): Value_4 | Promise<Value_4>;
        <Value_5>(atom: import("jotai").Atom<Value_5>, options: {
            unstable_promise: true;
        }): (Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5) | Promise<Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5>;
    }, set: {
        <Value_6, Result extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_6, undefined, Result>): Result;
        <Value_7, Update, Result_1 extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_7, Update, Result_1>, update: Update): Result_1;
    }, update: string[] | ((prev: string[]) => string[])) => void;
    onMount?: <S extends (update?: string[] | ((prev: string[]) => string[])) => void>(setAtom: S) => void | (() => void);
} & {
    init: string[];
};
export declare const UsersMetaAtom: import("jotai").Atom<UserEntity[]> & {
    write: (get: {
        <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
    } & {
        <Value_3>(atom: import("jotai").Atom<Value_3 | Promise<Value_3>>, options: {
            unstable_promise: true;
        }): Value_3 | Promise<Value_3>;
        <Value_4>(atom: import("jotai").Atom<Promise<Value_4>>, options: {
            unstable_promise: true;
        }): Value_4 | Promise<Value_4>;
        <Value_5>(atom: import("jotai").Atom<Value_5>, options: {
            unstable_promise: true;
        }): (Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5) | Promise<Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5>;
    }, set: {
        <Value_6, Result extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_6, undefined, Result>): Result;
        <Value_7, Update, Result_1 extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_7, Update, Result_1>, update: Update): Result_1;
    }, update: UserEntity[] | ((prev: UserEntity[]) => UserEntity[])) => void;
    onMount?: <S extends (update?: UserEntity[] | ((prev: UserEntity[]) => UserEntity[])) => void>(setAtom: S) => void | (() => void);
} & {
    init: UserEntity[];
};
export declare const MessagesAtom: import("jotai").Atom<{
    [channel: string]: MessageEnvelope[];
}> & {
    write: (get: {
        <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
    } & {
        <Value_3>(atom: import("jotai").Atom<Value_3 | Promise<Value_3>>, options: {
            unstable_promise: true;
        }): Value_3 | Promise<Value_3>;
        <Value_4>(atom: import("jotai").Atom<Promise<Value_4>>, options: {
            unstable_promise: true;
        }): Value_4 | Promise<Value_4>;
        <Value_5>(atom: import("jotai").Atom<Value_5>, options: {
            unstable_promise: true;
        }): (Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5) | Promise<Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5>;
    }, set: {
        <Value_6, Result extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_6, undefined, Result>): Result;
        <Value_7, Update, Result_1 extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_7, Update, Result_1>, update: Update): Result_1;
    }, update: {
        [channel: string]: MessageEnvelope[];
    } | ((prev: {
        [channel: string]: MessageEnvelope[];
    }) => {
        [channel: string]: MessageEnvelope[];
    })) => void;
    onMount?: <S extends (update?: {
        [channel: string]: MessageEnvelope[];
    } | ((prev: {
        [channel: string]: MessageEnvelope[];
    }) => {
        [channel: string]: MessageEnvelope[];
    })) => void>(setAtom: S) => void | (() => void);
} & {
    init: {
        [channel: string]: MessageEnvelope[];
    };
};
export declare const PaginationAtom: import("jotai").Atom<{
    [channel: string]: boolean;
}> & {
    write: (get: {
        <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
    } & {
        <Value_3>(atom: import("jotai").Atom<Value_3 | Promise<Value_3>>, options: {
            unstable_promise: true;
        }): Value_3 | Promise<Value_3>;
        <Value_4>(atom: import("jotai").Atom<Promise<Value_4>>, options: {
            unstable_promise: true;
        }): Value_4 | Promise<Value_4>;
        <Value_5>(atom: import("jotai").Atom<Value_5>, options: {
            unstable_promise: true;
        }): (Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5) | Promise<Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5>;
    }, set: {
        <Value_6, Result extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_6, undefined, Result>): Result;
        <Value_7, Update, Result_1 extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_7, Update, Result_1>, update: Update): Result_1;
    }, update: {
        [channel: string]: boolean;
    } | ((prev: {
        [channel: string]: boolean;
    }) => {
        [channel: string]: boolean;
    })) => void;
    onMount?: <S extends (update?: {
        [channel: string]: boolean;
    } | ((prev: {
        [channel: string]: boolean;
    }) => {
        [channel: string]: boolean;
    })) => void>(setAtom: S) => void | (() => void);
} & {
    init: {
        [channel: string]: boolean;
    };
};
export declare const TypingIndicatorAtom: import("jotai").Atom<{}> & {
    write: (get: {
        <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
    } & {
        <Value_3>(atom: import("jotai").Atom<Value_3 | Promise<Value_3>>, options: {
            unstable_promise: true;
        }): Value_3 | Promise<Value_3>;
        <Value_4>(atom: import("jotai").Atom<Promise<Value_4>>, options: {
            unstable_promise: true;
        }): Value_4 | Promise<Value_4>;
        <Value_5>(atom: import("jotai").Atom<Value_5>, options: {
            unstable_promise: true;
        }): (Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5) | Promise<Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5>;
    }, set: {
        <Value_6, Result extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_6, undefined, Result>): Result;
        <Value_7, Update, Result_1 extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_7, Update, Result_1>, update: Update): Result_1;
    }, update: {} | ((prev: {}) => {})) => void;
    onMount?: <S extends (update?: {} | ((prev: {}) => {})) => void>(setAtom: S) => void | (() => void);
} & {
    init: {};
};
export declare const TypingIndicatorTimeoutAtom: import("jotai").Atom<number> & {
    write: (get: {
        <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
    } & {
        <Value_3>(atom: import("jotai").Atom<Value_3 | Promise<Value_3>>, options: {
            unstable_promise: true;
        }): Value_3 | Promise<Value_3>;
        <Value_4>(atom: import("jotai").Atom<Promise<Value_4>>, options: {
            unstable_promise: true;
        }): Value_4 | Promise<Value_4>;
        <Value_5>(atom: import("jotai").Atom<Value_5>, options: {
            unstable_promise: true;
        }): (Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5) | Promise<Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5>;
    }, set: {
        <Value_6, Result extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_6, undefined, Result>): Result;
        <Value_7, Update, Result_1 extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_7, Update, Result_1>, update: Update): Result_1;
    }, update: number | ((prev: number) => number)) => void;
    onMount?: <S extends (update?: number | ((prev: number) => number)) => void>(setAtom: S) => void | (() => void);
} & {
    init: number;
};
export declare const RetryFunctionAtom: import("jotai").Atom<{
    function: <T>(fn: () => Promise<T>) => Promise<T>;
}> & {
    write: (get: {
        <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
    } & {
        <Value_3>(atom: import("jotai").Atom<Value_3 | Promise<Value_3>>, options: {
            unstable_promise: true;
        }): Value_3 | Promise<Value_3>;
        <Value_4>(atom: import("jotai").Atom<Promise<Value_4>>, options: {
            unstable_promise: true;
        }): Value_4 | Promise<Value_4>;
        <Value_5>(atom: import("jotai").Atom<Value_5>, options: {
            unstable_promise: true;
        }): (Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5) | Promise<Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5>;
    }, set: {
        <Value_6, Result extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_6, undefined, Result>): Result;
        <Value_7, Update, Result_1 extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_7, Update, Result_1>, update: Update): Result_1;
    }, update: {
        function: <T>(fn: () => Promise<T>) => Promise<T>;
    } | ((prev: {
        function: <T>(fn: () => Promise<T>) => Promise<T>;
    }) => {
        function: <T>(fn: () => Promise<T>) => Promise<T>;
    })) => void;
    onMount?: <S extends (update?: {
        function: <T>(fn: () => Promise<T>) => Promise<T>;
    } | ((prev: {
        function: <T>(fn: () => Promise<T>) => Promise<T>;
    }) => {
        function: <T>(fn: () => Promise<T>) => Promise<T>;
    })) => void>(setAtom: S) => void | (() => void);
} & {
    init: {
        function: <T>(fn: () => Promise<T>) => Promise<T>;
    };
};
export declare const ErrorFunctionAtom: import("jotai").Atom<{
    function: (error: Error) => unknown;
}> & {
    write: (get: {
        <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_2;
    } & {
        <Value_3>(atom: import("jotai").Atom<Value_3 | Promise<Value_3>>, options: {
            unstable_promise: true;
        }): Value_3 | Promise<Value_3>;
        <Value_4>(atom: import("jotai").Atom<Promise<Value_4>>, options: {
            unstable_promise: true;
        }): Value_4 | Promise<Value_4>;
        <Value_5>(atom: import("jotai").Atom<Value_5>, options: {
            unstable_promise: true;
        }): (Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5) | Promise<Value_5 extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? V extends Promise<infer V> ? any : V : V : V : V : V : V : V : V : V : V : Value_5>;
    }, set: {
        <Value_6, Result extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_6, undefined, Result>): Result;
        <Value_7, Update, Result_1 extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_7, Update, Result_1>, update: Update): Result_1;
    }, update: {
        function: (error: Error) => unknown;
    } | ((prev: {
        function: (error: Error) => unknown;
    }) => {
        function: (error: Error) => unknown;
    })) => void;
    onMount?: <S extends (update?: {
        function: (error: Error) => unknown;
    } | ((prev: {
        function: (error: Error) => unknown;
    }) => {
        function: (error: Error) => unknown;
    })) => void>(setAtom: S) => void | (() => void);
} & {
    init: {
        function: (error: Error) => unknown;
    };
};
export declare const CurrentChannelMessagesAtom: import("jotai").WritableAtom<MessageEnvelope[], unknown, void>;
export declare const CurrentChannelPaginationAtom: import("jotai").WritableAtom<boolean, unknown, void>;
export declare const CurrentChannelTypingIndicatorAtom: import("jotai").WritableAtom<any, unknown, void>;
