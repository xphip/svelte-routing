import type { RouterContext } from "../lib/RouterContext";
import type { RouteLocation } from "../components/Route/Route";
export declare const LOCATION: {};
export declare const ROUTER: {};
export declare const HISTORY: {};
export declare const useInternalLocation: () => import("svelte/store").Writable<RouteLocation>;
export declare const useLocation: () => import("svelte/store").Readable<RouteLocation>;
export declare const useRouter: () => RouterContext;
export declare const useHistory: () => {
    readonly location: ReturnType<(source: typeof window) => Location & {
        state: any;
        key: string;
    }>;
    listen: (listener: (params: {
        location: ReturnType<(source: typeof window) => Location & {
            state: any;
            key: string;
        }>;
        action: "POP" | "PUSH";
        preserveScroll?: boolean;
    }) => void) => () => void;
    navigate: (to: string, options?: {
        replace?: boolean;
        state?: { [k in string | number]: unknown; };
        preserveScroll?: boolean;
        blurActiveElement?: boolean;
    }) => void;
};
